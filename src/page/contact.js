// ContactPage.jsx

import React from 'react';
import { List, Typography } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const Contact = () => {
  const data = [
    { icon: <MailOutlined />, text: 'you@example.com' },
    { icon: <PhoneOutlined />, text: '123-456-7890' },
    { icon: <InstagramOutlined />, text: 'instagram.com/yourusername' },
    { icon: <GithubOutlined />, text: 'github.com/yourusername' },
    { icon: <LinkedinOutlined />, text: 'linkedin.com/in/yourusername' },
  ];

  return (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <div>
        <Title level={2}>Contact Me</Title>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={<a href={item.link}>{item.text}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Contact;
