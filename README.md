# Tampered Console 

Tampered console is just a console relay which adds prefix to standard streams and inspect arguments.
Tampered console is class-defined. Properties are accessible even without instanciating the Console object.
Instances of Tampered Console also supports namespace. So keeping track of console logs are made easy. Objects can also be elucidated with the inspect option.

--- 

### Install NPM Package

#### NPM CLI
```
npm install @mrwnmncd/tampered-console
```

--- 
### Dependencies


|NPM Package | Repository|
|--|--|
|[`debug`](https://www.npmjs.com/package/debug)|[`visionmedia/debug`](https://github.com/visionmedia/debug)|
|[`chalk`](https://www.npmjs.com/package/chalk)|[`chalk/chalk`](https://github.com/chalk/chalk)|



---

## Examples

#### Normal Log
```js
const Console = require('@mrwnmncd/tampered-console');
console.log('typical console log');
Console.log('redesigned console log');
new Console().log('instanciated console log');
```
#### Namespace
```js
const Console = require('@mrwnmncd/tampered-console');
new Console('namespace').log('instanciated console log with namespace');
new Console({ name: 'namespace' }).log(
  'instanciated console log with inspect option and namespace',
);
```
#### Inspect
```js
const Console = require('@mrwnmncd/tampered-console');
new Console({ inspect: true }).log(
  'instanciated console log with inspect option',
);
```
#### Namespace & Inspect
```js
const Console = require('@mrwnmncd/tampered-console');
new Console({ inspect: true, name: 'namespace' }).log(
  'instanciated console log with inspect option and namespace',
);
```
