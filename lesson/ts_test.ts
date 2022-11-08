interface IPoint {
  x: number;
  y: number;
  computer: (x: number, y: number) => number;
}

class Point implements IPoint {
  constructor(public x: number, public y: number) {}
  computer(a: number) {
    return a;
  } // 为什么这里少写一个参数也没有报错？
}

let test = new Point(1, 3);

let aa = <T>(x:T)=>{
  if(x===1){
    return [1,2,3]
  }else{
    return ["123"]
  }
}
let n1 = aa('1')
let arr: Array<number>
