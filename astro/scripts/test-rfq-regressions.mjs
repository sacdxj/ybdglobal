import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../src/components/RFQForm.astro', import.meta.url), 'utf8');
const script = source.match(/<script is:inline>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, 'RFQ inline script must exist');

function fixture(query, ok = true) {
  const elements = new Map();
  const fields = new Map();
  const element = selector => {
    if (!elements.has(selector)) elements.set(selector, {
      hidden: false, disabled: false, textContent: '', handlers: {},
      addEventListener(type, fn) { this.handlers[type] = fn; },
      querySelector: element, scrollIntoView() {},
    });
    return elements.get(selector);
  };
  for (const name of [...source.matchAll(/name="([^"]+)"/g)].map(match => match[1])) fields.set(name, {value: ''});
  const families = ['USB Cable', 'HDMI Cable', 'DisplayPort Cable', 'Hub / Dock', 'Charger'];
  let family = '';
  Object.defineProperty(fields.get('family'), 'value', {
    get: () => family,
    set: value => { family = families.includes(value) ? value : ''; },
  });
  fields.get('program').value = 'Direct product sourcing';
  const form = element('form');
  form.elements = {namedItem: name => fields.get(name)};
  form.checkValidity = () => form.valid;
  form.reportValidity = () => {};
  form.valid = true;
  const requests = [];
  const window = {};
  vm.runInNewContext(script, {
    document: {querySelector: element}, location: {search: query}, URLSearchParams, window,
    navigator: {},
    FormData: class {
      constructor() { this.values = new Map([...fields].map(([name, field]) => [name, field.value])); }
      get(name) { return this.values.get(name); }
    },
    fetch: async (_url, options) => { requests.push(options); return {ok}; },
  });
  return {fields, element, form, requests, window, submit: () => form.handlers.submit({preventDefault() {}})};
}

for (const [input, expected] of [['Hub & Dock','Hub / Dock'], ['DisplayPort','DisplayPort Cable'], ['USB Cable','USB Cable']]) {
  const test = fixture(`?family=${encodeURIComponent(input)}`);
  assert.equal(test.fields.get('family').value, expected);
}
assert.equal(fixture('?buyer=Wholesaler').fields.get('program').value, 'Wholesale assortment');
assert.equal(fixture('?project=OEM%20ODM').fields.get('program').value, 'OEM / ODM');
assert.equal(fixture('?buyer=Wholesaler&program=Explicit').fields.get('program').value, 'Explicit');
assert.equal(fixture('?buyer=Wholesaler').fields.get('buyer').value, '');
const invalid = fixture('');
invalid.form.valid = false;
await invalid.submit();
assert.equal(invalid.requests.length, 0);
const failed = fixture('', false);
await failed.submit();
assert.equal(failed.element('button[type="submit"]').disabled, false);
assert.equal(failed.window.dataLayer, undefined);
const sent = fixture('?family=DisplayPort');
await sent.submit();
assert.equal(sent.form.hidden, true);
assert.equal(sent.window.dataLayer.length, 1);
sent.element('[data-edit-rfq]').handlers.click();
assert.equal(sent.form.hidden, false);
assert.equal(sent.element('button[type="submit"]').disabled, false);
assert.equal(sent.element('[data-form-status]').hidden, true);
assert.equal(sent.element('[data-form-status]').textContent, '');
await sent.submit();
assert.equal(sent.requests.length, 2);
assert.equal(sent.window.dataLayer.length, 2);
console.log('PASS: RFQ family aliases, legacy program, explicit precedence, invalid input, failure recovery, edit and resubmit. All requests mocked.');
