'use strict';

const componentLib = require('..');
const assert = require('assert').strict;

assert.strictEqual(componentLib(), 'Hello from componentLib');
console.info('componentLib tests passed');
