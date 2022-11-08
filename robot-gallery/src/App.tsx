import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        console.log("error"); // 没有被执行
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("unknown");
        }
      }
      setLoading(true);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="logo" />
        <h1>机器人</h1>
      </div>
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
      <ShoppingCart />
      <div>{error ? `网站出错：${error}` : ""}</div>
      {loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((data, index) => {
            return index % 2 ? (
              <Robot id={data.id} name={data.name} email={data.email} />
            ) : (
              <RobotDiscount id={data.id} name={data.name} email={data.email} />
            );
          })}
        </div>
      ) : (
        "加载中"
      )}
    </div>
  );
};

export default App;
