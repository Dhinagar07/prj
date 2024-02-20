import {Row, Col, Card} from 'antd';
const Home = () => {
    return (
     <div style={{ padding: '20px' }}>
       <Row gutter={[16, 16]}>
         <Col span={12} lg={6} md={12} xs={24}>
           <Card title="About" style={{textAlign:'justify' }}>
             
               I am a dedicated and enthusiastic second-year student pursuing a degree in Computer Science and Engineering (CSE) at the College of Engineering, Guindy (CEG). Known for their passion for technology and computer science, Dhinagar is actively engaged in exploring the vast and dynamic field of CSE.
             
           </Card>
         </Col>
 
         <Col span={12} lg={6} md={12} xs={24}>
           <Card title="Achievement" style={{textAlign:'justify' }}>
            
               Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.
            
           </Card>
         </Col>
       </Row>
 
       <Row gutter={[16, 16]}>
         <Col span={12} lg={6} md={12} xs={24}>
           <Card title="Education" style={{textAlign:'justify' }}>
             
               Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.
             
           </Card>
         </Col>
 
         <Col span={12} lg={6} md={12} xs={24}>
           <Card title="Contact" style={{textAlign:'justify' }}>
               Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.
           </Card>
         </Col>
       </Row>
     </div>
   );
 };
 export default Home;