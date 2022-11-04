class Animal {
    constructor() {
      this.type = '鸟类'
    }
    age='100'
    eat() {return this.age}
  }
  var a = new Animal();
console.log(a.eat());