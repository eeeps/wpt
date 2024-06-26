// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.advances-not-defined
// Description:Testing that TextMetrics.advances is not defined
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.font = '50px CanvasTest';
  _assert(!("advances" in ctx.measureText('Hello')), "!(\"advances\" in ctx.measureText('Hello'))");
}, "Testing that TextMetrics.advances is not defined");
done();
