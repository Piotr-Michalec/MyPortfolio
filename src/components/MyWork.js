import React from 'react';
import MyWorkThumbnail from './MyWorkThumbnail';
import { Container } from 'react-bootstrap';
import TetrisBackground from '../media/images/tetr.png';
import sowa from '../media/images/sowa.jpg';
import bird from '../media/images/bird_silhouette_vector_134154_1920x1080.jpg';
import '../styling/MyWork.css';
const MyWork=()=> {

const projects = [
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},

  {project: 'tetrisgame', image: bird, title: 'bird', link:'/aboutme'},
  {project: 'tetrisgame', image: TetrisBackground, title: 'left', link:'/aboutme'},//link = link to the page with project
  {project: 'snakegame', image:TetrisBackground, title: 'right', link: '/resume'},

 {project: 'something', image:TetrisBackground, title: 'bottom', link: 'third'},
  {project: 'somethingelse', image:TetrisBackground, title: 'bottom2', link: 'fourth'}, 

];
    return (
 
     <div className ='content'>
        { projects.map((item)=>(<MyWorkThumbnail key ={item.project} pr = {item}/>)) }
        
      
        </div>
      
        
    )
  };
  
  export default MyWork;
  