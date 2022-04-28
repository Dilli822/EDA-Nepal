
import react from "react";
import { 
    Layout, Menu, Breadcrumb , Input, Radio , Divider, Table, Alert,
    Popover, Button,  Descriptions, Calendar, Badge,  Avatar,
    Card, Col, Row , PageHeader, Dropdown, message, Pagination,Modal} from 'antd';

import {
  DesktopOutlined, SearchOutlined,SwapRightOutlined,PlusOutlined,
  PieChartOutlined,FileOutlined,DeleteOutlined,EditOutlined,MenuFoldOutlined,
  TeamOutlined, UserOutlined, MenuUnfoldOutlined, MessageOutlined,
  DownOutlined, DashboardOutlined, CopyOutlined, DownloadOutlined,
  DashboardFilled, UsergroupAddOutlined, VideoCameraOutlined, UploadOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const text = <span>Title</span>;
const content = (
<div>
  <p>Content</p>
  <p>Content</p>
</div>
);

export default function CustomHeader(){
    return (
        <div>

<Header className="site-layout-background" style={{ padding: 0, backgroundColor: "#142c61", zIndex: 999, color: "#fff", position: "fixed", width: "100%", top: 0, minHeight: "60px"}} >
      
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

  )
}