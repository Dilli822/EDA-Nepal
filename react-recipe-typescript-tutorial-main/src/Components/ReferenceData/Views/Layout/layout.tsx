
import { Component, useState, useEffect } from "react";
import * as React from 'react'
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//     AppstoreOutlined,
//     PieChartOutlined,
//     DesktopOutlined,
//     ContainerOutlined,
//     MailOutlined,
// } from '@ant-design/icons';

// const { Header, Sider, Content } = Layout;

//   type MenuItem = Required<MenuProps>['items'][number];
//   // type MenuItem = any
  
//   function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//     type?: 'group',
//   ): 
  
//   MenuItem {
//     return {
//       key,
//       icon,
//       children,
//       label,
//       type,
//     } as MenuItem;
//   }
  
//   const items: MenuItem[] = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('Option 3', '3', <ContainerOutlined />),
  
//     getItem('Navigation One', 'sub1', <MailOutlined />, [
//       getItem('Option 5', '5'),
//       getItem('Option 6', '6'),
//       getItem('Option 7', '7'),
//       getItem('Option 8', '8'),
//     ]),
  
//     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//       getItem('Option 9', '9'),
//       getItem('Option 10', '10'),
  
//       getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//     ]),
//   ];

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//           <div className="logo" />
//           <Menu
//             theme="dark"
//             mode="inline"
//           />
//         </Sider>
//         <Layout className="site-layout">
//           <Header className="site-layout-background" style={{ padding: 0 }}>
//             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: 'trigger',
//               onClick: this.toggle,
//             })}
//           </Header>
//           <Content
//             className="site-layout-background"
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               minHeight: 280,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// export default () => <SiderDemo />;
import myModal2 from "./Modal";

import { Layout, Menu,Breadcrumb, Pagination, Button, Modal } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    loading: false,
    visible: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
      <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
         
        </Sider>


        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>


         <Layout className="site-layout">
           <Header className="site-layout-background" style={{ padding: 0 }}>
             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content

            <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>



            <Pagination defaultCurrent={6} total={500} />
          </Content>
        </Layout>
      </Layout>



  
      </div>

      <div>
              <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
            <Button
              key="link"
              href="https://google.com"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Search on Google
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      
      </div>
    );
  }
}

export default SiderDemo;