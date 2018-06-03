const fibonacci = require("./fibonacci.js");
const assert = require("assert");

describe('Fibonacci sequence elements', function() {
  it("Zero element is equal 0", function() {
    assert.equal(fibonacci(0), "0");
  });

  it("First element is equal 1", function() {
    assert.equal(fibonacci(1), "1");
  });

  it("Tenth element is equal 55", function() {
    assert.equal(fibonacci(10), "55");
  });

  it("Fiftieth element is equal 12586269025", function() {
    assert.equal(fibonacci(50), "12586269025");
  });

  it("One hundredth element is equal 354224848179261915075 ", function() {
    assert.equal(fibonacci(100), "354224848179261915075");
  });

  it("Three hundredth element is equal 222232244629420445529739893461909967206666939096499764990979600 ", function() {
    assert.equal(fibonacci(300), "222232244629420445529739893461909967206666939096499764990979600");
  });
});