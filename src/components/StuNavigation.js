import React from 'react';
import './component.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
function StuNavigation(){
    return(

        <div className="navigation">
            <h3>Student Navigation</h3>
            <ul>
                
                <li><a href="/Profile"><i className='fa fa-user'>   Profile</i></a></li>
                <li><a href="/StuForms"><i className='fa fa-folder'></i>Feedback</a></li>
               <li><a href="/SecurityChange"><i className='fa fa-gears'>  SecurityChange</i></a></li>
                <li> <a href='/'><i className='fa fa-sign-out'></i>  Logout</a> </li>
            </ul>
        </div>


    );
        

}

export default  StuNavigation;