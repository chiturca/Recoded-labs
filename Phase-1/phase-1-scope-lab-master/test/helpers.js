const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const src = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
console.log(src);

jsdom({
  html, src
});