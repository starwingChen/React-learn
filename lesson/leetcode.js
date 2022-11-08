function add(){
  var total=[...arguments].reduce((a,b)=>a+b);
  function sum(){
    total+=[...arguments].reduce((a,b)=>a+b);;
    return sum;
  }
  sum.toString=function(){
    return total;
  }
  return sum;
}

console.log(add(1,2,3,4));