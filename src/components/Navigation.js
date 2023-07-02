import React from 'react';
import './component.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
function Navigation(){
    return(

        <div className="navigation">
            <h3>Admin  Navigation</h3>
            <ul>
                <li><a href="/dash"><i className='fa fa-dashboard'></i>   Dashboard</a></li>
                <li><a href="/AddSurvey"><i className='fa fa-plus'>   AddSurvey</i></a></li>
                <li><a href="/ViewSurvey"><i className='fa fa-eye'>  ViewSurvey</i></a></li>
                <li><a href="/ViewFeedback"><i className='fa fa-eye'>  ViewFeedback</i></a></li>
                <li><a href="/ManageStudent"><i className='fa fa-globe'> ManageStudent</i></a></li>
                <li><a href="/SecurityChange"><i className='fa fa-gears'>  SecurityChange</i></a></li>
                <li> <a href='/'><i className='fa fa-sign-out'></i>  Logout</a> </li>
            </ul>
        </div>


    );
        

}

export default  Navigation;