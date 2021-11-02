/*
 * @Author: your name
 * @Date: 2021-11-02 13:45:22
 * @LastEditTime: 2021-11-02 17:09:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angel-ui-example/src/layout/menu/index.tsx
 */
import React from "react";
import classNames from "classnames";
import { useRouteMatch, Link } from "react-router-dom";
import { menuOption } from "../config";

const MenuLink: React.FC<{ title: string; path: string }> = ({
  title,
  path,
}) => {
  let match = useRouteMatch({
    path: path,
    exact: true,
  });
  const classes = classNames("menu-item", {
    active: match,
  });
  return (
    <div className={classes}>
      <Link to={path}>{title}</Link>
    </div>
  );
};
const Menu = () => {
  return (
    <div className="menu">
      {menuOption.map((item) => {
        return <MenuLink path={item.path} title={item.title} key={item.path} />;
      })}
    </div>
  );
};
export default Menu;
