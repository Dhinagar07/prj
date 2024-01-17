import React from 'react';
import './App.css'; // Import your CSS file

import { FaMobile, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
        <div className='contacts'>
          <li>
            <a href="tel:+916581242908">
              <FaMobile className='icon'/>
              </a>
          </li>
          <li>
            <a href="mailto:dhinsgsr775@gmail.com"><FaEnvelope className='icon' /></a>
          </li>
          <li>
            <a href="https://www.instagram.com"><FaInstagram className='icon' /></a>
          </li>
          <li>
            <a href="https://www.facebook.com"><FaFacebook className='icon' /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com"><FaLinkedin className='icon' /></a>
          </li>
        </div>
      );
    };

const Prof = () => {
  

  return (
    <div className='prof'>
    
    <div className='pimg'>      
      <img className='img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAY1BMVEX///8AAADU1NQMDAz09PTs7Oy4uLj8/Pze3t7p6emfn5+amppnZ2enp6d0dHTR0dGEhITAwMB+fn5UVFQwMDBDQ0OUlJQ+Pj4pKSmwsLA3NzdgYGBaWlrGxsaMjIwaGhpLS0uDYU5gAAACnElEQVR4nO3ai3aqMBCFYUcDAaGCAt4vff+nLBwPRYswUQmTdu3vCf5lVi4kTiYAAAAAAAAAAAAAv4PyQk9JR/RJolV8zI7xKkqkUx4L1zk18nUoHdTiRRe6d4k86ah7wYbaNoF01q2PB4WVD+mwRleiQ5HLzkSipXTcVbLtady6sQplPYlEmXReZdebSLSTDiw3v0erzq2N/NboM4lEvnSiXrCNCy3cGO7Zxr30zp2wiUTSyw83qyvSMzsyaIyEG1cGjSvhRn5alxNbuDE1aEyFG7uPZQ3pA1rfuawmfT4LZmziTPqTQR3YxoP4oYJfIKWXx3Kw+07hla30UE/4VVx6Ba+ETKP0qeef/mOF9IHiSvXth+IH3P9U95dhJr7u1NSxI/HoTGLncC8cSiztilZh4cZ0uRFG+V1hPndi0fnBW8b1AWMWLx27IL0Rnvydf3LxFwSAP0trHQbTZBqESjty3LnjJf750Dx1XQ5nP3FqGdenNPv5FFd2Zqn0l3VNB+t233fnOnBg1BPuxieVviJVMffpWn68xpLHSDVnA6/mYpVBbJhIFAtdBPj8MN8MuMQrjTYd51o0+gTXJhe499KRIzV/pdd2GDVSmTwntK3GnN7nlxKJzuMlPjtdGvOxEk8vJxKdxkkM21cS5opxvmvNd5dH4jES3xnpygij7b0z0pXC/vHc5PGtn/WnOcX/N4Gzt72Sv740NmwvkjmfwMrtJvL/5jFh9Sxp8G8eE1YfRIJ3F56rwuaXg8mLugmbdwPPH74fs/kPiyFmdcXizFYDJRLZW8ZN/lxmxt79yvt7dc3enj3M6lix99eprufV5x2tNX4O1vhprXGYXaZS2EpUBc2GQYWtxUdPB+PCDTQAAAAAAAAAAADAr/AFFF8dQG0ROBgAAAAASUVORK5CYII=" alt="Description" />
    </div>
    </div>

  );
}
const About = () => {

  return (
    <div className='con'>
      <h2>About</h2> 
      <h5>
             Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.

      </h5>     
    </div>
  );
}
const Skills = () => {

  return (
    <div className='con'> 
      <h2>Skills</h2>
      <h5>
             Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.

      </h5>     
    </div>
  );
}
const Achieve = () => {

  return (
    <div className='con'>
      <h2>Achievement</h2>
      <h5>
             Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.

      </h5>      
    </div>
  );
}
const Education = () => {

  return (
    <div className='con'>
      <h2>Education </h2>
      <h5>
             Dhinagar, a bright and ambitious student at CEG, exudes enthusiasm for learning and innovation. With a keen intellect and a passion for tackling challenges, he navigates the academic realm with dedication. A beacon of curiosity and a team player, Dhinagar inspires those around him with his commitment to excellence. At CEG, he is not just a student but a dynamic force shaping the future.

      </h5>     
    </div>
  );
}


const App = () => {
  
  return (
    <div className="app">
      <div className='head'>
        
        <Prof />

        
      </div>
  
      <div className='main'>
        <div className="sidebar">
          <Contact />
        </div>
      
        <div className="content">  
        
          <li>       
          <About />
          <Achieve />
          </li>
          <li>       
          <Skills />
          <Education />
          </li>
         
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
