function findMax(numbers){
  //numbers = [23,18,98,102,8,32,89];
  numbers.sort(function(a,b){return a-b});
  return numbers.pop();
}
console.log(findMax([23,18,98,102,8,32,89]));
