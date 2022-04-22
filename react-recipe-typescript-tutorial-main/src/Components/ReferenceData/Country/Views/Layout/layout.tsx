
// import { Component, useState, useEffect } from "react";
// import * as React from 'react'
// // import {
// //   MenuUnfoldOutlined,
// //   MenuFoldOutlined,
// //   UserOutlined,
// //   VideoCameraOutlined,
// //   UploadOutlined,
// //     AppstoreOutlined,
// //     PieChartOutlined,
// //     DesktopOutlined,
// //     ContainerOutlined,
// //     MailOutlined,
// // } from '@ant-design/icons';

// // const { Header, Sider, Content } = Layout;

// //   type MenuItem = Required<MenuProps>['items'][number];
// //   // type MenuItem = any
  
// //   function getItem(
// //     label: React.ReactNode,
// //     key: React.Key,
// //     icon?: React.ReactNode,
// //     children?: MenuItem[],
// //     type?: 'group',
// //   ): 
  
// //   MenuItem {
// //     return {
// //       key,
// //       icon,
// //       children,
// //       label,
// //       type,
// //     } as MenuItem;
// //   }
  
// //   const items: MenuItem[] = [
// //     getItem('Option 1', '1', <PieChartOutlined />),
// //     getItem('Option 2', '2', <DesktopOutlined />),
// //     getItem('Option 3', '3', <ContainerOutlined />),
  
// //     getItem('Navigation One', 'sub1', <MailOutlined />, [
// //       getItem('Option 5', '5'),
// //       getItem('Option 6', '6'),
// //       getItem('Option 7', '7'),
// //       getItem('Option 8', '8'),
// //     ]),
  
// //     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// //       getItem('Option 9', '9'),
// //       getItem('Option 10', '10'),
  
// //       getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
// //     ]),
// //   ];

// // class SiderDemo extends React.Component {
// //   state = {
// //     collapsed: false,
// //   };

// //   toggle = () => {
// //     this.setState({
// //       collapsed: !this.state.collapsed,
// //     });
// //   };

// //   render() {
// //     return (
// //       <Layout>
// //         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
// //           <div className="logo" />
// //           <Menu
// //             theme="dark"
// //             mode="inline"
// //           />
// //         </Sider>
// //         <Layout className="site-layout">
// //           <Header className="site-layout-background" style={{ padding: 0 }}>
// //             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
// //               className: 'trigger',
// //               onClick: this.toggle,
// //             })}
// //           </Header>
// //           <Content
// //             className="site-layout-background"
// //             style={{
// //               margin: '24px 16px',
// //               padding: 24,
// //               minHeight: 280,
// //             }}
// //           >
// //             Content
// //           </Content>
// //         </Layout>
// //       </Layout>
// //     );
// //   }
// // }

// // export default () => <SiderDemo />;
// import myModal2 from "./Modal";

// import { Layout, Menu,Breadcrumb, Pagination, Modal , Input, Radio , Divider, Table,
//   Popover, Button,  Descriptions, Calendar, Badge,  Avatar,
//   Card, Col, Row , PageHeader, Dropdown, message} from 'antd';

// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

// const { Header, Sider, Footer, Content } = Layout;
// const { SubMenu } = Menu;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//     loading: false,
//     visible: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

  
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = () => {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       this.setState({ loading: false, visible: false });
//     }, 3000);
//   };

//   handleCancel = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     const { visible, loading } = this.state;
//     return (

//       <div>
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//           <Menu>
//           <Menu.Item key="1" icon={<PieChartOutlined />}>
//               Option 1
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Option 2
//             </Menu.Item>
//             <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9" icon={<FileOutlined />}>
//               Files
//             </Menu.Item>
//           </Menu>
         
//         </Sider>


//         {/* <Button type="primary" onClick={this.showModal}>
//           Open Modal with customized footer
//         </Button> */}


//          <Layout className="site-layout">
//            <Header className="site-layout-background" style={{ padding: 0 }}>
//              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
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

//             <Breadcrumb separator=">">
//     <Breadcrumb.Item>Home</Breadcrumb.Item>
//     <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
//     <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
//     <Breadcrumb.Item>An Application</Breadcrumb.Item>
//   </Breadcrumb>



//             <Pagination defaultCurrent={6} total={500} />
//           </Content>
//         </Layout>
//       </Layout>

//       <Layout className="site-layout">
//           {/*  Starts Main COntent from Here */}
//           <Content style={{ margin: '16px' }}>
         
//           <Row>
//           <Col span={24}>

//           <Card title="" style={{ margin: '16px 0' }} bordered={false} >
//               <Row>

//               <Col span={5}>
//               <Input placeholder="Search Keyword" onChange = {handleChange}/>
//               </Col>

//              <Col style={{margin: "0 14px"}}>
//              <Button type="primary" icon={<SearchOutlined /> }>
//                   Search
//             </Button>
//             </Col>

//             </Row>
//             </Card>

//             </Col>
//            </Row>

//            <div style = {{ minHeight: ""}}>

//            <Row>

//                <Col span={24}>
//                     <Card title="" bordered={false}>
                        
//                         <Col>
//                         {/* CRUD OPTIONS HERE CREATE DELETE EDIT AND UPDATE BUTTON COLLECTIONS STARTS*/}
//                         <Button type="primary" icon={<PlusOutlined /> } style={{ margin: '4px '}}>
//                             Create
//                         </Button>
                   
//                         <Button type="primary" icon={<EditOutlined />} style={{ margin: '4px '}}>
//                             Edit
//                         </Button>
                    
//                         <Button danger icon={<DeleteOutlined />} style={{ margin: '4px '}}>
//                             Delete
//                         </Button>
                 
//                         <Button type="primary" icon={<UploadOutlined />} style={{ margin: '4px '}}>
//                             Update
//                         </Button>
//                         </Col>
//                         <br />
//                         {/* ENDS CRUD OPTIONS HERE CREATE DELETE EDIT AND UPDATE BUTTON COLLECTIONS */}


//                         {/* MAIN CONTENT TABLE STARTS  */}
//                         <Table style={{overflow: 'auto'}}
//                         rowSelection={{
//                             ...rowSelection,
//                          }}
//                          columns={columns}
//                          dataSource={data}
//                         />

          
//                        {/* Pagination Starts */}
//                       <Col>
//                         <Pagination
//                          showSizeChanger
//                          onShowSizeChange={onShowSizeChange}
//                          defaultCurrent={3}
//                          total={500}
//                         />
//                        </Col>
//                       {/* Pagination Ends */}

//                     </Card>
//                  </Col>

//             </Row>
//             </div>

//           </Content>
//           {/* Ends Content Here */}

//         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//         </Layout>
  
//       </div>

//       {/* <div>
//               <Modal
//           visible={visible}
//           title="Title"
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//           footer={[
//             <Button key="back" onClick={this.handleCancel}>
//               Return
//             </Button>,
//             <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
//               Submit
//             </Button>,
//             <Button
//               key="link"
//               href="https://google.com"
//               type="primary"
//               loading={loading}
//               onClick={this.handleOk}
//             >
//               Search on Google
//             </Button>,
//           ]}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </div>
      
//       </div> */}
//     );
//   }
// }

// export default SiderDemo;


import React, { useEffect, useState, Component } from 'react'
import { 
    Layout, Menu, Breadcrumb , Input, Radio , Divider, Table,
    Popover, Button,  Descriptions, Calendar, Badge,  Avatar,
    Card, Col, Row , PageHeader, Dropdown, message, Pagination,Modal} from 'antd';

import {
  DesktopOutlined, SearchOutlined,SwapRightOutlined,PlusOutlined,
  PieChartOutlined,FileOutlined,DeleteOutlined,EditOutlined,MenuFoldOutlined,
  TeamOutlined, UserOutlined, MenuUnfoldOutlined, MessageOutlined,
  DownOutlined, DashboardOutlined, CopyOutlined, DownloadOutlined,
  DashboardFilled, UsergroupAddOutlined, VideoCameraOutlined, UploadOutlined
} from '@ant-design/icons';

// import siderLogo  from "../Images/e-destinacces-logo.png";
// import siderImg from "../Images/sidebar-1.jpg";

import { count } from 'console';
import createModal from "./Modal";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const text = <span>Title</span>;
const content = (
<div>
  <p>Content</p>
  <p>Content</p>
</div>
);

function onShowSizeChange() {
  console.log();
}

// interface Country {
//   countries: string[];
// }

const countries = ["nepal", "usa", "mexico"];



// searchHandleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
//   var searchValue:string = event.target.value;
//   console.log(searchValue);
//   setState({
//     searchValue: event.target.value 
//   })
// }



const columns = [
  {
    title: 'ID',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'ContryName',
    dataIndex: 'age',
  },
  {
    title: 'City Code',
    dataIndex: 'address',
  },
  {
    title: 'State',
    dataIndex: 'age',
  },
  {
    title: 'Country',
    dataIndex: 'address',
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

let companyName: string = "Tukmein";

// function showDeleteConfirm() {
//   confirm({
//     title: 'Are you sure delete this task?',
//     icon: <ExclamationCircleOutlined />,
//     content: 'Some descriptions',
//     okText: 'Yes',
//     okType: 'danger',
//     cancelText: 'No',
//     onOk() {
//       console.log('OK');
//     },
//     onCancel() {
//       console.log('Cancel');
//     },
//   });
// }

function Country() {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    var typedValue = event.target.value;
    console.log(typedValue);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  }

  const handleDeleteOk = () => {
    setIsDeleteModalVisible(false);
  }

  const showDeleteConfirm = () => {
    setIsDeleteModalVisible(true);
  }


  return (
    <div>
      <div style={{ }}>

      <Header className="site-layout-background" style={{ padding: 0, backgroundColor: "#142c61", color: "#fff", position: "fixed", width: "100%", zIndex: "999", top: 0, minHeight: "60px"}} >
      
      <div style={{ float: "right"}}>
        <Row>
        <Col className="customNavHeader"  style={{ padding: "0 2rem" }}>
        <Button>Chat</Button>
        <Button>Chat</Button>
      

        <Popover style={{width: 80, height: 80, border: "none" }}placement="bottom" title={text} content={content} trigger="click">
              <img  alt="profile-logo" style={{ height: "50px", maxWidth: "100%", width: "50px", borderRadius: "50%"}}/>
        </Popover>
        </Col>
        </Row>
        </div>

      </Header>
      </div>

    
      <Layout style={{marginTop: "5rem"}}>
        <Sider style={{}}>
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined  />}>
              My Dashboard
            </Menu.Item>

            <SubMenu key="sub2" icon={<DashboardOutlined  />} title="Sales & Operations">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<DashboardOutlined />} title="Reference Data">
              <Menu.Item key="3"> User Management </Menu.Item>
              <Menu.Item key="4"> Company Profile </Menu.Item>
              <Menu.Item key="5"> DMCs </Menu.Item>
              <Menu.Item key="5"> Global Data </Menu.Item>
                <SubMenu key="sub3" title="Region">
                   <Menu.Item key="7">Country</Menu.Item>
                   <Menu.Item key="8">State</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub2" icon={<DashboardOutlined  />} title="Financial">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<DashboardOutlined  />} title="CRM">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          {/*  Starts Main COntent from Here */}
          <Content style={{ margin: '16px' }}>

          <Breadcrumb separator=">">
          <h3> Country </h3>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Country</Breadcrumb.Item>
          </Breadcrumb>
         
          <Row>
          <Col span={24}>

          <Card title="" style={{ margin: '16px 0' }} bordered={false} >
              <Row>

              <Col span={5}>
              <Input placeholder="Search Keyword" onChange = {handleChange}/>
              </Col>

             <Col style={{margin: "0 14px"}}>
             <Button type="primary" icon={<SearchOutlined /> }>
                  Search
            </Button>
            </Col>

            </Row>
            </Card>

            </Col>
           </Row>

      <div style = {{ minHeight: ""}}>
           <Row>
               <Col span={24}>
                    <Card title="" bordered={false}>
                        
                        <Col>
                        {/* CRUD OPTIONS HERE CREATE DELETE EDIT AND UPDATE BUTTON COLLECTIONS STARTS*/}
                        {/* <Button type="primary" icon={<PlusOutlined /> } style={{ margin: '4px '}}>
                            Create
                        </Button> */}
                        
                        <Button type="primary" icon={<PlusOutlined /> } onClick={showModal}>
                          Create
                        </Button>

                        <Button type="primary" icon={<EditOutlined />}  onClick={showModal} style={{ margin: '4px '}}>
                            Edit
                        </Button>
                    
                        <Button danger icon={<DeleteOutlined />}  onClick={showDeleteConfirm} style={{ margin: '4px '}}>
                            Delete
                        </Button>

                        </Col>
                        <br />
                        {/* ENDS CRUD OPTIONS HERE CREATE DELETE EDIT AND UPDATE BUTTON COLLECTIONS */}


                        {/* MAIN CONTENT TABLE STARTS  */}
                        <Table style={{overflow: 'auto'}}
                        rowSelection={{
                            ...rowSelection,
                         }}
                         columns={columns}
                         dataSource={data}
                        />

          
                       {/* Pagination Starts */}
                      <Col>
                        <Pagination
                         showSizeChanger
                         onShowSizeChange={onShowSizeChange}
                         defaultCurrent={3}
                         total={500}
                        />
                       </Col>
                      {/* Pagination Ends */}

                    </Card>
                 </Col>

            </Row>
            </div>

          </Content>
          {/* Ends Content Here */}

        <Footer style={{ textAlign: 'center' }}> {companyName} {new Date().getFullYear()} Created by Ant UED</Footer>

        </Layout>
      </Layout>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Modal title="Delete" visible={isDeleteModalVisible} onOk={handleDeleteOk} onCancel={handleDeleteCancel}>
        <h2> Delete </h2>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      </div>
    );
  }


export default Country;