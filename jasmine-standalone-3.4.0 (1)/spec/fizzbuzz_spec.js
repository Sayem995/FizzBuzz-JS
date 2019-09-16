describe('Fizzbuzz', function() {
  var a;

  it("expects 3.fizzbuzz to return fizz", function(){
    a = 3;
    expect(fizzbuzz(a)).toBe("Fizz");
  });
  it("expects fizzbuzz(5) to return buzz", function(){
    a = 5;
    expect(fizzbuzz(a)).toBe("Buzz");
  });
});
