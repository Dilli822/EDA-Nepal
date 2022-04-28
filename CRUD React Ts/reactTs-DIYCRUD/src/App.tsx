// import React from 'react';
// import type {ReactNode} from 'react';
// import './App.css';
// import { IRecipe } from './IRecipe';
// import Recipe from './RecipeComponent';
// import RecipeComponent from './RecipeComponent';
// import { Layout, Menu, Button, Breadcrumb, MenuProps } from 'antd';
// import { LaptopOutlined, HomeOutlined, UserOutlined, NotificationOutlined, MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
// import { PageHeader } from 'antd';
// import Siders from "./Components/Menu.tsx/Menu";
// import customModal from "./Components/ReferenceData/Views/Modal/Modal";
// // function App() {
// // return (
// // // const { Header, Content, Sider } = Layout;
// // // const items: MenuItem[] = [
// // //   getItem('Option 1', '1', <PieChartOutlined />),
// // //   getItem('Option 2', '2', <DesktopOutlined />),
// // //   getItem('Option 3', '3', <ContainerOutlined />),

// // //   getItem('Navigation One', 'sub1', <MailOutlined />, [
// // //     getItem('Option 5', '5'),
// // //     getItem('Option 6', '6'),
// // //     getItem('Option 7', '7'),
// // //     getItem('Option 8', '8'),
// // //   ]),

// // //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// // //     getItem('Option 9', '9'),
// // //     getItem('Option 10', '10'),

// // //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
// // //   ]),
// // // ];

// // // const App = () => {
// // //   const [collapsed, setCollapsed] = React.useState(false);

// // //   const toggleCollapsed = () => {
// // //     setCollapsed(!collapsed);
// // //   };
// // // return (
// // //     <div>

// // // <div style={{ width: 256 }}>
// // //       <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
// // //         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
// // //       </Button>
// // //       <Menu
// // //         defaultSelectedKeys={['1']}
// // //         defaultOpenKeys={['sub1']}
// // //         mode="inline"
// // //         theme="dark"
// // //         inlineCollapsed={collapsed}
// // //         items={items}
// // //       />
// // //     </div>

// // // <Layout>
// // //     <Header className="header">
// // //       <div className="logo" />
// // //       <Menu theme="dark" mode="horizontal" />
// // //     </Header>
// // //     <Layout>
// // //       <Sider width={200} className="site-layout-background">
// // //         <Menu
// // //           mode="inline"
// // //           defaultSelectedKeys={['1']}
// // //           defaultOpenKeys={['sub1']}
// // //           style={{ height: '100%', borderRight: 0 }}
// // //         />
// // //       </Sider>
// // //       <Layout style={{ padding: '0 24px 24px' }}>
// // //         <Breadcrumb style={{ margin: '16px 0' }}>
// // //           <Breadcrumb.Item>Home</Breadcrumb.Item>
// // //           <Breadcrumb.Item>List</Breadcrumb.Item>
// // //           <Breadcrumb.Item>App</Breadcrumb.Item>
// // //         </Breadcrumb>
// // //         <Content
// // //           className="site-layout-background"
// // //           style={{
// // //             padding: 24,
// // //             margin: 0,
// // //             minHeight: 280,
// // //           }}
// // //         >
// // //           Content
// // //         </Content>
// // //       </Layout>
// // //     </Layout>
// // //    </Layout>
// // //     </div>
// //   )
// // }

// // export default App;

// function App() {
//   return(
//     // <Breadcrumb>
//     //   <Breadcrumb.Item href="">
//     //     <HomeOutlined />
//     //   </Breadcrumb.Item>
//     //   <Breadcrumb.Item href="">
//     //     <UserOutlined />
//     //     <span>Application List</span>
//     //   </Breadcrumb.Item>
//     //   <Breadcrumb.Item>Application</Breadcrumb.Item>
//     // </Breadcrumb>

// // <Siders />
// <customModal />
//   );
// }
// export default App;
import './App.css';
// import { Modal, Button } from 'antd';
// import React ,{ Fragment, useState, useEffect, Component } from 'react';

// const App = () => {
//   const [visible, setVisible] = React.useState(false);
//   const [confirmLoading, setConfirmLoading] = React.useState(false);
//   const [modalText, setModalText] = React.useState('Content of the modal');

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleOk = () => {
//     setModalText('The modal will be closed after two seconds');
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setVisible(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setVisible(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal with async logic
//       </Button>
//       <Modal
//         title="Title"
//         visible={visible}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//       >
//         <p>{modalText}</p>
//       </Modal>

//       <Breadcrumb>
//     <Breadcrumb.Item href="">
//       <HomeOutlined />
//     </Breadcrumb.Item>
//     <Breadcrumb.Item href="">
//       <UserOutlined />
//       <span>Application List</span>
//     </Breadcrumb.Item>
//     <Breadcrumb.Item>Application</Breadcrumb.Item>
//   </Breadcrumb>
//     </>
//   );
// };

// export default App;
// import Icon from '@ant-design/icons';
import * as React from 'react'
import { Breadcrumb, Button, MenuProps,Pagination} from 'antd';
// import {Icon} from 'antd';
// import myModal from "./Components/ReferenceData/Country/Views/Modal/Modal";
import {
} from '@ant-design/icons';

import Country from "./Components/ReferenceData/Views/Country/Views/Layout/layout";
// import ApiCall from "./Components/ReferenceData/axiosApi/layout";
import Layout from "./Components/Shared-Components/Layout/layout";
import CollapseableMenu from "./Components/Shared-Components/Menu/collapseableMenu";
import MainMenu from "./Components/Shared-Components/Menu/menu";

function App(){

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return(
    <div>
{/* 
    <div>
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
    </div>


  <div>
    <Pagination defaultCurrent={6} total={500} />;
  </div> */}
  {/* <Country/> */}
  {/* <ApiCall /> */}
  {/* <Layout /> */}

  <MainMenu />


  </div>



  )
}

export default App;

