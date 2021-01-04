import React from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {
    return(
        <>
           <div className="letfMenu">
                <Link to="/">All Courses</Link>
                <Link id="uppro" to="/uploadproject">Upload Project</Link>
                <Link to="/projectrank">Project Rank</Link>
                <Link id="checkcv" to="/checkyorcv">Check Your CV</Link>
                <Link to="/referandearn">Refer & Earn</Link> 
            </div> 
        </>
    );
}
export default Leftside;