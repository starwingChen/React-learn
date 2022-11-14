import React from "react";
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import styles from "./App.module.css";
import { HomePage,SigninPage,RegisterPage,DetailPage } from "./pages";

// 用作路由
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<SigninPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/detail/:touristRouteId" element={<DetailPage/>}/> {/*接收url中的参数*/}
          <Route path="*" element={<h1>404 not found</h1>}/> { /*非以上页面的访问进入这个页面*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
