import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Dropdown, Button, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import  store  from "../../redux/store";
import { useTranslation } from "react-i18next";
import { changeLanguageActionCreator,addLanguageActionCreator } from "../../redux/language/languageActions";


export function Header() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const storeState = store.getState()
  const [language, setLanguage] = useState(storeState.language)
  const [languageList, setlanguageList] = useState(storeState.languageList)
  // 获得改变后的新数据
  store.subscribe(()=>{
    const storeState = store.getState() //重新获得一次数据
    setLanguage(storeState.language)  
    setlanguageList(storeState.languageList)
  })
  // 发送改变指令
  const changeLanguage = (event)=>{
    if(event.key === 'new'){ // add_language
      const action = addLanguageActionCreator('新语言', 'new_language')
      store.dispatch(action) 
    }else{
      const action = changeLanguageActionCreator(event.key)
      store.dispatch(action) 
    }


  }

  return (
    <div className={styles["app-header"]}>
      {/* top header */}
      <div className={styles["top-header"]}>
        <Typography.Text style={{ marginLeft: "6%" }}>
          {t('header.slogan')}
        </Typography.Text>
        <Dropdown
          overlay={
            <Menu
              onClick={(event)=>changeLanguage(event)}
              items={[...storeState.languageList.map((value)=>({
                key:value.code,
                label:value.name,
              })), {key: 'new', label:'添加新语言'}]}
            />
          }
        >
          <Button style={{ marginLeft: 15 }}>
            <Space style={{letterSpacing:0}}>
              {language==='zh'?'中文':'English'}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Button.Group className={styles["button-group"]}>
          <Button onClick={() => navigate('/register')}>{t('header.register')}</Button>
          <Button onClick={() => navigate('/signin')}>{t('header.signin')}</Button>
        </Button.Group>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className={styles["App-logo"]}></img>
          <Typography.Title level={4} className={styles["title"]}>
            {t('header.title')}
          </Typography.Title>
        </span>
        <Input.Search
          placeholder="请输入关键字"
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu
        mode={"horizontal"}
        className={styles["main-menu"]}
        items={[
          { key: "1", label: t('header.home_page') },
          { key: "2", label: t('header.weekend') },
          { key: "3", label: t('header.group') },
          { key: "4", label: t('header.backpack') },
          { key: "5", label: t('header.private') },
          { key: "6", label: t('header.cruise') },
          { key: "7", label: t('header.hotel') },
          { key: "8", label: t('header.local') },
          { key: "9", label: t('header.theme') },
          { key: "10", label: t('header.custom') },
          { key: "11", label: t('header.study')},
          { key: "12", label: t('header.visa') },
          { key: "13", label: t('header.enterprise') },
          { key: "14", label: t('header.high_end') },
          { key: "15", label: t('header.outdoor') },
          { key: "16", label: t('header.insurance') },
        ]}
      />
    </div>
  );
}

