/*
 * @Author: your name
 * @Date: 2021-11-02 13:41:46
 * @LastEditTime: 2021-11-02 13:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angel-react-example/src/components/404/index.tsx
 */
import React from "react";
import { useLocation } from "react-router-dom";

function NoComponent() {
  let location = useLocation();
  return (
    <div className="no-component">
      no match for <code>{location.pathname}</code>
    </div>
  );
}

export default NoComponent;
