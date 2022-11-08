function rand7(){ // [1,7]
  return Math.ceil(Math.random()*7)
}

function rand10(){
  // rand49() -> rand10()
  let res = (rand7()-1)*7+rand7() // [1,49]
  while(res > 40) res = (rand7()-1)*7+rand7() 
  return res % 10 + 1 // 将[1,40]映射到[1,10]
}

function test(n) {
  let table = Array(16).fill(0)
  for(let i = 0; i < n; i++){
    table[rand10()]++
  }
  return table
}

console.log(test(10000));