import React from "react";
import { Image, Typography } from "antd";
import {Link} from 'react-router-dom'

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
  return (
    <Link to={`/detail/${id}`}> {/*另一种导航的方式，避免手动对导航进行事件处理（如onClick），且内容相当于是被一个<a>标签包裹起来了*/}
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">
          {title.slice(0, 25)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  );
}