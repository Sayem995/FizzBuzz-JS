describe('Fizzbuzz', function() {
  var a;

  it("expects fizzbuzz(3) to return fizz", function(){
    a = 3;
    expect(fizzbuzz(a)).toBe("Fizz");
  });

  it("expects fizzbuzz(5) to return buzz", function(){
    a = 5;
    expect(fizzbuzz(a)).toBe("Buzz");
  });

  it("expects fizzbuzz(7) to return 7", function(){
    a = 7;
    expect(fizzbuzz(a)).toBe(7);
  });
  
});
