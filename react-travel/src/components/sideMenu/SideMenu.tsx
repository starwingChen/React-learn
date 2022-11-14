import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
export function SideMenu() {
  return (
    <Menu
      className={styles["side-menu"]}
      mode={"vertical"}
      items={sideMenuList.map((ele) => ({
        label: ele.title,
        key: ele.title,
        icon: <GifOutlined />,
        children: ele.subMenu.map((ele) => ({
          label: ele.title,
          key: ele.title,
          icon: <GifOutlined />,
          children: ele.subMenu.map((ele) => ({
            label: ele,
            key: ele,
            icon: <GifOutlined />,
          })),
        })),
      }))}
    ></Menu>
  );
}
