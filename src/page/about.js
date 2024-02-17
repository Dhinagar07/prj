import React from 'react';
import { Row, Col, Card } from 'antd';


const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {/* Image on the left */}
        <Col xs={24} md={12}>
          <Card cover={<img alt="About" src={'https://th.bing.com/th/id/OIP.0CZd1ESLnyWIHdO38nyJDAAAAA?rs=1&pid=ImgDetMain'} style={{ height: '100%' }} />}></Card>
        </Col>

        {/* Content on the right */}
        <Col xs={24} md={12}>
          <Card>
            <h2>About Me</h2>
            <p>
              {/* Your about me content goes here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Add more content as needed */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
