function first(a) {
let result = a;
if(arguments.length>1){
 result=arguments[0]+arguments[1];
}
  function second(b) {
    result += b;
    return second;
  }

  second.toString = function() {
    return result;
  };

  return second;
}
alert(first(5,4))