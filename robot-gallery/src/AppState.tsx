import React, { PropsWithChildren, useState } from "react";

/* 本文件用于管理全局状态 */
interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}
// 定义全局元素
const defaultContextValue: AppStateValue = {
  username: "starwingChen",
  shoppingCart: { items: [] },
};
// 提供元素
export const appContext = React.createContext(defaultContextValue);
// 提供改变元素的函数
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);
// 提供provider
export const AppStateProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, setState] = useState(defaultContextValue);

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
