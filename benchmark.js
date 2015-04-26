'use strict';

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var folder = require('./index.js');
var fold = folder.fold;
var objectSwitch = require('./object-based-switch.js');
var switchCase = require('./switch.js');

suite
  .add('switchCase',
    function () {
      fold('Francisco tomé Costa');
    },
    {
      onStart: function () {
        folder.setReplaceChar(switchCase);
      }
    }
  )
  .add('objectSwitch',
    function () {
      fold('Francisco tomé Costa');
    },
    {
      onStart: function () {
        folder.setReplaceChar(objectSwitch);
      }
    }
  )
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  .run({ 'async': false });
