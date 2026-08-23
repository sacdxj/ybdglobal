import fs from 'node:fs';
import path from 'node:path';

const dist=path.resolve('dist');
const files=[];
const walk=dir=>fs.readdirSync(dir).forEach(name=>{const full=path.join(dir,name);const stat=fs.statSync(full);stat.isDirectory()?walk(full):name.endsWith('.html')&&files.push(full)});
walk(dist);

const issues=[];
const titles=new Map();
const expectsNoindex=process.env.PUBLIC_NOINDEX === 'true';
const value=(html,pattern)=>html.match(pattern)?.[1]?.trim()||'';
for(const file of files){
  const html=fs.readFileSync(file,'utf8');
  const rel=path.relative(dist,file).replaceAll(path.sep,'/');
  const redirect=html.includes('http-equiv="refresh"');
  if(redirect){
    if(!html.includes('name="robots" content="noindex"')) issues.push([rel,'redirect missing noindex']);
    continue;
  }
  const title=value(html,/<title>(.*?)<\/title>/is);
  const description=value(html,/<meta name="description" content="([^"]*)"/i);
  const h1Count=(html.match(/<h1(?:\s|>)/gi)||[]).length;
  if(!html.includes('<html lang="en">')) issues.push([rel,'missing lang=en']);
  if(!html.includes('href="#main-content"')) issues.push([rel,'missing skip link']);
  if(!html.includes('<main id="main-content"')) issues.push([rel,'missing main landmark target']);
  if(!html.includes('rel="canonical"')) issues.push([rel,'missing canonical']);
  const hasNoindex=html.includes('name="robots" content="noindex, nofollow"');
  if(expectsNoindex&&!hasNoindex) issues.push([rel,'missing private noindex']);
  if(!expectsNoindex&&hasNoindex) issues.push([rel,'unexpected public noindex']);
  if(html.includes('name="keywords"')) issues.push([rel,'obsolete meta keywords present']);
  if(h1Count!==1) issues.push([rel,`expected one H1, found ${h1Count}`]);
  if(!title || title.length<25 || title.length>75) issues.push([rel,`title length ${title.length}`]);
  if(!description || description.length<70 || description.length>180) issues.push([rel,`description length ${description.length}`]);
  if(rel!=='404.html'&&!html.includes('aria-label="Page audience and intent"')) issues.push([rel,'missing intent bar']);
  if(titles.has(title)) issues.push([rel,`duplicate title with ${titles.get(title)}`]); else titles.set(title,rel);
}

console.log(JSON.stringify({pages:files.length,issues},null,2));
if(issues.length) process.exitCode=1;
