import React from 'react';
import type {ReactNode} from 'react';
import './App.css';
import { IRecipe } from './IRecipe';
import Recipe from './RecipeComponent';
import RecipeComponent from './RecipeComponent';
import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';

function App() {


const { Header, Content, Sider } = Layout;

return (
    <div>
<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
    </div>
  )
}

export default App;
