
import React, { useEffect, useState, Component } from 'react'
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

import CustomHeader from "../Header/Header";
// import Footer from "../Footer/footer";
import CollapseableMenu from '../Menu/collapseableMenu';


export default function layout(){
    return(
        <div>
        <CustomHeader />
        <CollapseableMenu />
        {/* <Footer /> */}
        </div>
    )
}