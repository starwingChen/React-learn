import React from 'react'
import { Row, Col, Typography, Divider,Image } from "antd";
import image1 from'../../assets/images/e1.png'
import image2 from'../../assets/images/e2.png'
import image3 from'../../assets/images/e3.png'
import image4 from'../../assets/images/e4.png'
import styles from "./Enterprise.module.css"
import { useTranslation } from "react-i18next";
export const Enterprise = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Divider orientation='center' style={{marginBottom:0}}>
        <Typography.Title level={3}>{t('home_page.joint_venture')}</Typography.Title>
      </Divider>
      {/* 图片 */}
      <Row className={styles['image']}>
        <Col span={6}><Image src={image1} style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}/></Col>
        <Col span={6}><Image src={image2}style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}/></Col>
        <Col span={6}><Image src={image3}style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}/></Col>
        <Col span={6}><Image src={image4}style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}/></Col>
      </Row>  
    </div>

  )
}
