import React from 'react'
import { Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";

export function Footer() {
  const {t} = useTranslation()
  return (
    <Layout.Footer>
    <Typography.Title level={4} style={{ textAlign: "center" }}>
      {t('footer.detail')}
    </Typography.Title>
  </Layout.Footer>
  )
}
