import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Home = () =>{
    return(
<div className="container p-md-5 p-2  h-75 mt-5">
      <h1 className='jumbotron'> My name is Piotr Michalec</h1>
      <div className=' h-100 ' style={{borderLeft: '1px solid rgba(0,0,0,.1)', borderTop:'1px solid rgba(0,0,0,.1)', padding:'8vw' }}>
      <h3 className = 'm-1 m-sm-2'> 
      <ReactTypingEffect text = 'Welcome to my portfolio.'/></h3>
      </div>
      </div>
   )
};
export default Home;