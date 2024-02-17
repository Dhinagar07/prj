import React, { useState } from 'react';
import { Layout, Avatar, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import './App.css';
import Home from './page/Home';
import About from './page/about';
import Skill from './page/skill';
import Edu from './page/edu';
import Contact from './page/contact';

const { Header, Sider, Content } = Layout;

const Nav = () => {
  const [col, setcol] = useState(true);

  const Toggle = () => {
    setcol(!col);
  };
  const loc=useLocation();
  return (
    <Sider className='side' width={200} theme='dark' collapsible collapsed={col} collapsedWidth='50' onCollapse={Toggle}>
      <Menu theme='dark' mode='vertical' defaultSelectedKeys={[loc.pathname]} className='menu' width={150}>
        <Menu.Item key='/' icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<BookOutlined />}>
        <Link to="/edu">Education</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<TrophyOutlined />}>
        <Link to="/skill">Skill</Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<InfoCircleOutlined />}>
        <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key='5' icon={<ContactsOutlined />}>
        <Link to="/contact">Contacts</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const MyLayout = () => {
  return (
    <Router>
    <Layout style={{ minHeight: '100vh' }}  className='lyt'>
    <Nav />
      <Layout className='lyt'>
      <Header className='header'>
         <Avatar size={64} className='avatar' icon={<UserOutlined />} />
       </Header>        
       <Content className='content'>
          
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/skill' element={<Skill/>} />
              <Route path='/edu' element={<Edu/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          
        </Content>
      </Layout>
    </Layout>
    </Router>
  );
};

export default MyLayout;
