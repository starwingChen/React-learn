import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Header, Footer, SideMenu, Carousel, ProductCollection, Enterprise } from "../../components";
import { Row, Col, Typography, Spin } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import axios from 'axios'
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import { useTranslation } from "react-i18next";

export const HomePage: React.FC = () => {
  const { t } = useTranslation() //返回的是一个函数
  const [productList, setProductList] = useState<any>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('http://123.56.149.216:8080/api/productCollections')
      .then(({ data }) => {
        setProductList(data)
        setLoading(false)
      })
  }, [])

  if(loading){
    return <Spin
    size="large"
    style={{
      marginTop:200,
      marginBottom:200,
      marginLeft: 'auto',
      marginRight: "auto",
      width: '100%'
    }}
    />
  }

  return (
    <div className={styles["App"]}>
      <Header />
      {/* 页面内容 */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        {/* 自定义接收参数传入的组件 */}
        <ProductCollection
          title={<Typography.Title level={3} type="warning">{t('home_page.hot_recommended')}</Typography.Title>}
          sideImage={sideImage}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={<Typography.Title level={3} type="warning">{t('home_page.new_arrival')}</Typography.Title>}
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={<Typography.Title level={3} type="warning">{t('home_page.domestic_travel')}</Typography.Title>}
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
      </div>
      <Enterprise />
      <Footer />
    </div>
  )
}
