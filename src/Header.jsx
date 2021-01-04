import React from 'react';
import {Link} from 'react-router-dom';
import {LeaderBoard,Rewards,Profile} from './Icons'; 
import Imgre from './reward.gif';
import Rewardscount from './Rewardscount';

const Header = ()=> {
    return(
        <>
            <header>
                <div className="topLinks">
                    <Link to="/" id="Leadership"><LeaderBoard /><span>Leadership Borad</span></Link>
                    <Link to="/" id="rewardi"><Rewards /><span>Rewards</span><Rewardscount /><img src={Imgre} alt="imgre" id="img_reward" className="img_reward" /></Link>
                    <Link to="/"><Profile /><span>My Profile</span></Link>
                </div>
            </header>
        </>
    );
}

export default Header;