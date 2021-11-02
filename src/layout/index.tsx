/*
 * @Author: your name
 * @Date: 2021-11-02 16:57:45
 * @LastEditTime: 2021-11-02 17:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angel-ui-example/src/layout/index.tsx
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/index.scss";
import Menu from "./menu";
import Main from "./main";
const Layout = () => {
  return (
    <Router>
      <div className="layout">
        {Menu()}
        {Main()}
      </div>
    </Router>
  );
};
export default Layout;
