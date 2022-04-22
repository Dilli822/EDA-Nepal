import React, { useState , useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from './logo.svg';
import './App.css';
import { SimCardAlertSharp } from '@mui/icons-material';
import Country from "./Components/ReferenceData/Views/Country";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App (){
  return(
  //   <Layout>
  //   <Sider
  //     breakpoint="lg"
  //     collapsedWidth="0"
  //     onBreakpoint={broken => {
  //       console.log(broken);
  //     }}
  //     onCollapse={(collapsed, type) => {
  //       console.log(collapsed, type);
  //     }}
  //   >
  //     <div className="logo" />
  //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
  //       <Menu.Item key="1" icon={<UserOutlined />}>
  //         nav 1
  //       </Menu.Item>
  //       <Menu.Item key="2" icon={<VideoCameraOutlined />}>
  //         nav 2
  //       </Menu.Item>
  //       <Menu.Item key="3" icon={<UploadOutlined />}>
  //         nav 3
  //       </Menu.Item>
  //       <Menu.Item key="4" icon={<UserOutlined />}>
  //         nav 4
  //       </Menu.Item>
  //     </Menu>
  //   </Sider>
  //   <Layout>
  //     <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
  //     <Content style={{ margin: '24px 16px 0' }}>
  //       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
  //         content
  //       </div>
  //     </Content>
  //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  //   </Layout>
  // </Layout>
  <Country />
  )

}
export default App;