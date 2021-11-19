/*
 * @Author: your name
 * @Date: 2021-11-02 13:36:07
 * @LastEditTime: 2021-11-02 17:19:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angel-react-example/src/components/Icon/index.tsx
 */
import React from "react";
import { Icon as IconComponent } from "angel-react";

const Icon = () => {
  return (
    <div className="App">
      <IconComponent icon={["fab", "500px"]}></IconComponent>
    </div>
  );
};

export default Icon;
