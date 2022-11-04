import { useState,useEffect } from "react"

export default function App2() {
    //useState设置状态
  const [msg, setMsg] = useState(1)
  const [msg2,setMsg2] = useState(2)
    // 相当于DidMount，如果参数2的数组不为[]，相当于DidUpdate，如果有return，返回值相当于WillUnmount
  useEffect(()=>{
    console.log('msg2 changed');
  },[msg2])
  return (
    <div>
        <h1>test</h1>
        <button onClick={()=>setMsg(msg+1)}>{msg}</button>
        <button onClick={()=>setMsg2(msg2+1)}>{msg2}</button>
    </div>
)}
