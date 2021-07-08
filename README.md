<h1 align=center> Tampered Console </h1>
<h4 align=center><code>tampered-console</code></h4>
<h4 align=center><samp>1.0.0</samp></h4>
<br /><br />

Tampered console is just a console relay which adds prefix to standard streams and inspect arguments.

Tampered console is class-defined. Properties are accessible even without instanciating the Console object.

Instances of Tampered Console also supports namespace. So keeping track of console logs are made easy. Objects can also be elucidated with the inspect option.

--- 

<h3 align=center>Clone Repo</h3>
<div align=center>
<h4 align=center><samp><b>SSH</b></samp></h4>
<code>git@github.com:mrwnmncd/tampered-console.git</code>
</div><br />
<div align=center>
<h4 align=center><samp><b>HTTP</b></samp></h4>
<code>https://github.com/mrwnmncd/tampered-console.git</code>
</div><br />

--- 
<h3 align=center>Dependencies</h3>
<div align=center>

|NPM Package | Repository|
|--|--|
|[`debug`](https://www.npmjs.com/package/debug)|[`visionmedia/debug`](https://github.com/visionmedia/debug)|
|[`chalk`](https://www.npmjs.com/package/chalk)|[`chalk/chalk`](https://github.com/chalk/chalk)|

</div>

---

## Examples

#### Normal Log
```js
const Console = require('path-to-console');
console.log('typical console log');
Console.log('redesigned console log');
new Console().log('instanciated console log');
```
#### Namespace
```js
new Console('namespace').log('instanciated console log with namespace');
new Console({ name: 'namespace' }).log(
  'instanciated console log with inspect option and namespace',
);
```
#### Inspect
```js
new Console({ inspect: true }).log(
  'instanciated console log with inspect option',
);
```
#### Namespace & Inspect
```js
new Console({ inspect: true, name: 'namespace' }).log(
  'instanciated console log with inspect option and namespace',
);
```
