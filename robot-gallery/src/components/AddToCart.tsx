import React,{useContext} from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";


// 推荐使用
// 使用自定义Hook，这个在RobotDiscount.tsx中使用
// 其实就是一个利用闭包的普通函数，第一层返回函数是因为要先执行useContext
export const useAddToCart = ()=>{
  const setState = useContext(appSetStateContext)
  const addToCart = (id ,name)=>{
    if(setState){
      setState((state)=>{
        return{
          ...state,
          shoppingCart:{
            items: [...state.shoppingCart.items,{id, name}] //在原先的基础上加入id和name
          }
        }
      })
    }
  }
  return addToCart
}

// 使用高阶组件，这个在Robot.tsx中使用
// 命名规范：HOC函数都以with作为开头
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>)=>{
  // 第一层调用传入组件返回函数，第二层调用返回新组件(在APP.tsx中以组件形式调用)
  // 作用是传入Robot组件，绑定一个addToCart方法
  return (props)=>{
    // 加入购物车的业务代码逻辑
    const setState = useContext(appSetStateContext)
    const addToCart = (id ,name)=>{
      if(setState){
        setState((state)=>{
          return{
            ...state,
            shoppingCart:{
              items: [...state.shoppingCart.items,{id, name}] //在原先的基础上加入id和name
            }
          }
        })
      }
    }
    return <ChildComponent {...props} addToCart={addToCart}/>
  }
}