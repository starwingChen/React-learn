declare module '*.css'{
  // 将css转为对象，让react能组件化加载css样式
  // 即Css in JS, JSS
  // 但这样将无法调试（生成的classname是一个字符串序列），得使用插件https://www.npmjs.com/package/jss-debug
  const css:{[key:string]:string}
  export default css
}