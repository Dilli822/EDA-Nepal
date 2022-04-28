// import react, {useState} from "react";
// import { 
//     Layout, Menu, Breadcrumb , Input, Radio , Divider, Table, Alert,
//     Popover, Button,  Descriptions, Calendar, Badge,  Avatar,
//     Card, Col, Row , PageHeader, Dropdown, message, Pagination,Modal} from 'antd';

// import {
//   DesktopOutlined, SearchOutlined,SwapRightOutlined,PlusOutlined,
//   PieChartOutlined,FileOutlined,DeleteOutlined,EditOutlined,MenuFoldOutlined,
//   TeamOutlined, UserOutlined, MenuUnfoldOutlined, MessageOutlined,
//   DownOutlined, DashboardOutlined, CopyOutlined, DownloadOutlined,
//   DashboardFilled, UsergroupAddOutlined, VideoCameraOutlined, UploadOutlined
// } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
// const text = <span>Title</span>;
// const content = (
// <div>
//   <p>Content</p>
//   <p>Content</p>
// </div>
// );

// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   MailOutlined,
// } from '@ant-design/icons';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('Option 3', '3', <ContainerOutlined />),

//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Option 7', '7'),
//     getItem('Option 8', '8'),
//   ]),

//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),

//     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
// ];



// export default function CollapseableMenu() {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };
//     return(
//     //     <Layout style={{marginTop: "5rem"}}>
//     //     <Sider style={{}}>
//     //       <div className="logo" />
//     //       <Menu defaultSelectedKeys={['1']} mode="inline">
//     //       <Menu.Item key="1" icon={<DashboardOutlined  />}>
//     //           My Dashboard
//     //         </Menu.Item>
  
//     //         <SubMenu key="sub2" icon={<DashboardOutlined  />} title="Sales & Operations">
//     //           <Menu.Item key="6">Team 1</Menu.Item>
//     //           <Menu.Item key="8">Team 2</Menu.Item>
//     //         </SubMenu>
  
//     //         <SubMenu key="sub1" icon={<DashboardOutlined />} title="Reference Data">
//     //           <Menu.Item key="3"> User Management </Menu.Item>
//     //           <Menu.Item key="4"> Company Profile </Menu.Item>
//     //           <Menu.Item key="5"> DMCs </Menu.Item>
//     //           <Menu.Item key="5"> Global Data </Menu.Item>
//     //             <SubMenu key="sub3" title="Region">
//     //                <Menu.Item key="7">Country</Menu.Item>
//     //                <Menu.Item key="8">State</Menu.Item>
//     //             </SubMenu>
//     //         </SubMenu>
//     //         <SubMenu key="sub2" icon={<DashboardOutlined  />} title="Financial">
//     //           <Menu.Item key="6">Team 1</Menu.Item>
//     //           <Menu.Item key="8">Team 2</Menu.Item>
//     //         </SubMenu>
  
//     //         <SubMenu key="sub2" icon={<DashboardOutlined  />} title="CRM">
//     //           <Menu.Item key="6">Team 1</Menu.Item>
//     //           <Menu.Item key="8">Team 2</Menu.Item>
//     //         </SubMenu>
//     //       </Menu>
//     //     </Sider>  
//     // </Layout>

  
//         <div style={{ width: 256 }}>
//           <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
//             {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           </Button>
//           <Menu
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             mode="inline"
//             theme="dark"
//             inlineCollapsed={collapsed}
//             // items={items}
//           />
//         </div>

//     )
// }

import react from "React";

export default function  myFunction(){
  return(
    <div>
    
    </div>
  )
}