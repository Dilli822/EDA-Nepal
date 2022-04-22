import React from "react";
import { Breadcrumb } from 'antd';

export default function App(){
  return(
    <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>  <a href="">Application List</a> </Breadcrumb.Item>
  </Breadcrumb>
  )
}