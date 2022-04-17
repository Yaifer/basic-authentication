import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ProfileOutlined, InfoCircleOutlined, SmileOutlined } from
         '@ant-design/icons';

const Nav = ({ current}) => {
  return (
    <div>
      <Menu selectedKeys={[current]} 
        mode="horizontal">
        <Menu.Item key='home'>
          <Link to={'/'}>
            <HomeOutlined />&nbsp;Home
          </Link>
        </Menu.Item>
        <Menu.Item key='morepublic'>
          <Link to={'/morepublic'}>
            <InfoCircleOutlined />&nbsp;More Public info
          </Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Link to='/profile'>
          <ProfileOutlined />&nbsp;Profile
          </Link>
        </Menu.Item>
        <Menu.Item key='protected'>
          <Link to='/protected'>
            <SmileOutlined />&nbsp;The Happy Counting App
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;