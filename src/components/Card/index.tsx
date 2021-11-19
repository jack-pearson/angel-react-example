/*
 * @Author: your name
 * @Date: 2021-11-02 17:05:11
 * @LastEditTime: 2021-11-19 19:19:54
 * @LastEditors: jack-pearson
 * @Description: In User Settings Edit
 * @FilePath: /angel-react-example/src/components/Card/index.tsx
 */
import React from "react";
import { Card as CardComponent, Icon as IconComponent } from "angel-react";
const Card = () => {
  return (
    <CardComponent
      className="card"
      title="测试"
      extra={<a href="http://www.baidu.com">更多</a>}
      cover={
        <img
          alt="example"
          src="http://5b0988e595225.cdn.sohucs.com/images/20190118/35c70cf236a64cf6b6d6c5320da12504.jpeg"
        />
      }
      actions={[
        ["fab", "500px"],
        ["fab", "500px"],
        ["fab", "500px"],
      ].map((item, index) => (
        <IconComponent key={index} icon={item} style={{ fontSize: "20px" }}>
          {item}
        </IconComponent>
      ))}
    >
      测试项目
    </CardComponent>
  );
};

export default Card;
