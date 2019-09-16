function fizzbuzz(number) {
  if (number % 3 == 0 && number % 5 != 0) {
  return "Fizz";
}
  else if (number % 5 == 0 && number % 3 != 0) {
  return "Buzz";
}
  else if (number % 5 == 0 && number % 3 == 0) {
    return "fizzbuzz";
  }
  else {
  return number;
  }
}

var array = new Array(100);

for(var i=0; i<array.length; i++){
  console.log(fizzbuzz(i))
}