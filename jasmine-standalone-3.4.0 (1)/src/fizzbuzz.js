function fizzbuzz(number) {
  if (number == 3) {
  return "Fizz";
}
  else if (number == 5) {
  return "Buzz";
}
  else if (number % 5 == 0 && number % 3 == 0) {
    return "fizzbuzz";
  }
  else {
  return number;
  }
}
