/*
 * @Author: your name
 * @Date: 2021-11-02 16:52:33
 * @LastEditTime: 2021-11-02 17:49:45
 * @LastEditors: jack-pearson
 * @Description: In User Settings Edit
 * @FilePath: /angel-ui-example/src/layout/config.ts
 */
import Welcome from "@/components/welcome";
import { Button, Icon, Card } from "@/components";
export const menuOption = [
  {
    path: "/welcome",
    title: "欢迎",
    component: Welcome,
  },
  {
    path: "/icon",
    title: "Icon 图标",
    component: Icon,
  },
  {
    path: "/button",
    title: "Button 按钮",
    component: Button,
  },
  {
    path: "/card",
    title: "Card 卡片",
    component: Card,
  },
];
