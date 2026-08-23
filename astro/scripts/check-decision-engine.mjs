import fs from 'node:fs'; import path from 'node:path';
const file=path.resolve('dist/index.html'); if(!fs.existsSync(file)){console.error('Missing dist/index.html. Run npm run build.');process.exit(1)}
const html=fs.readFileSync(file,'utf8');
const required=[
 ['Configurator anchor','id="configure"'],['Configurator component','data-decision-engine'],['Header quote CTA','class="header-cta" href="/get-a-quote/"'],
 ['Family step','Product family'],['Requirement step','Primary requirement'],['Customization step','Customization'],['Buying stage','Buying stage'],
 ['RFQ result','Continue to RFQ'],['Start event','configurator_start'],['Result event','configurator_result_view'],['Restart event','configurator_start_over']
];
const missing=required.filter(([,s])=>!html.includes(s)); const radios=(html.match(/type="radio"/g)||[]).length;
if(radios<17)missing.push(['Configuration options','at least 17 radio inputs']);
console.log(JSON.stringify({page:'dist/index.html',configurator:{requiredChecks:required.length+1,radios,missing}},null,2));
if(missing.length)process.exitCode=1;
