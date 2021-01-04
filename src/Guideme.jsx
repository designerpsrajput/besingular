import React from 'react';
import { Link } from 'react-router-dom';
const Guideme = () => {
    return(
        <>
            <div id="screen1" className="screen1 guideBox">
                 <div className="msgBox"> 
                    <h1>Check Out Leadership Board Folks</h1>
                    <Link  onClick={Scren2} to="/"  className="btn btn-info">Next</Link>
               </div>
            </div>
            <div id="screen2" className="screen2 guideBox">
                 <div className="msgBox"> 
                    <h1>Awesome! Check Out Your CV</h1>
                    <Link  onClick={Scren3} to="/"  className="btn btn-info">Next</Link>
               </div>
            </div>
            <div id="screen3" className="screen3 guideBox">
                 <div className="msgBox"> 
                    <h1>Do You have an awesome project to show?</h1>
                    <Link  onClick={Scren4} to="/"  className="btn btn-info">Next</Link>
               </div>
            </div>
            <div id="screen4" className="screen4 guideBox">
                 <div className="msgBox"> 
                    <h1>Do You have an awesome project to show?</h1>
                    <Link onClick={Scren5}  to="/"  className="btn btn-info">Finish tour</Link>
               </div>
            </div>
        </>
    );
}
const Scren2 = () => { 
    var screen1 = document.getElementById("screen1");
    screen1.classList.remove("ShowGuide");    
    var screen12 = document.getElementById("Leadership");
    screen12.classList.remove('Zindex');   
    
    var screen2 = document.getElementById("screen2");
    screen2.classList.add("ShowGuide");    
    var screen22 = document.getElementById("checkcv");
    screen22.classList.add('Zindex');  
}
const Scren3 = () => { 
    var screen2 = document.getElementById("screen2");
    screen2.classList.remove("ShowGuide");    
    var screen22 = document.getElementById("checkcv");
    screen22.classList.remove('Zindex');   
    
    var screen3 = document.getElementById("screen3");
    screen3.classList.add("ShowGuide");    
    var screen32 = document.getElementById("uppro");
    screen32.classList.add('Zindex');  
}
const Scren4 = () => { 
    var screen3 = document.getElementById("screen3");
    screen3.classList.remove("ShowGuide");    
    var screen32 = document.getElementById("uppro");
    screen32.classList.remove('Zindex');   
    
    var screen4 = document.getElementById("screen4");
    screen4.classList.add("ShowGuide");    
    var screen42 = document.getElementById("chatBot");
    screen42.classList.add('Zindex2');  
}
const Scren5 = () => { 
    var screen4 = document.getElementById("screen4");
    screen4.classList.remove("ShowGuide");    
    var screen42 = document.getElementById("chatBot");
    screen42.classList.remove('Zindex2');  
    var screen13 = document.getElementById("rewardi");
    screen13.classList.remove('Zindex');  
    var screen42 = document.getElementById("Recount");
    screen42.classList.add('show');  
}
export default Guideme;