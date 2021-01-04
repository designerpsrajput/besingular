import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './avatar.jpg'; 
import { DesktopMacTwoTone } from '@material-ui/icons';

const Contentarea = () => {
    return(
        <>
           <div  className="contentArea">
               <div className="msgBox">
                    <img src={Avatar} alt="avatar" className="img_avatar" />
                    <h1>Welcome Our BeSingular Buddy Bot Is Here To Guide You.</h1>
                    <Link to="/" onClick={Screen1} className="btn btn-info">Start Tour!</Link>
               </div>
            </div> 
        </>
    );
}
const Screen1 = () => { 
    var screen1 = document.getElementById("screen1");
    screen1.classList.add("ShowGuide");    
    var screen12 = document.getElementById("Leadership");
    screen12.classList.add('Zindex');  
    var screen13 = document.getElementById("rewardi");
    screen13.classList.add('Zindex');    
}
export default Contentarea;