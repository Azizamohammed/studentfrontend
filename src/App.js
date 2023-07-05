import './App.css';
import Login from './components/Login';
import React from 'react';
import Registration from './components/Registration';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import StuNavigation from './components/StuNavigation';
import Dashboard from './components/Admin/Dashboard';
import AddSurvey from './components/Admin/AddSurvey';
import ManageStudent from './components/Admin/ManageStudent';
import SecurityChange from './components/Admin/SecurityChange';
import ViewSurvey from './components/Admin/ViewSurvey';
import Profile from './components/Student/Profile';
import StuForm from './components/Student/StuForm';
import StuSecurity from './components/Student/StuSecurity';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Update from './components/Admin/Update';
import UpdateSudent from './components/Admin/UpdateStudent';
import ViewFeedback from './components/Admin/ViewFeedback';
import Feedback from './components/Student/Feedback';



function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path='/' component={Login}></Route>
        <Route  path='/dash' component={Dashboard}></Route>
        <Route  path='/AddSurvey' component={AddSurvey}></Route>
        <Route  path='/ManageStudent' component={ManageStudent}></Route>
        <Route  path='/ViewSurvey' component={ViewSurvey}></Route>
        <Route  path='/SecurityChange' component={SecurityChange}></Route>
        <Route path='/ViewFeedback' component={ViewFeedback}/>

        <Route path='/StuDashboard' component={Dashboard}></Route>
        <Route  path='/Profile' component={Profile}></Route>
        <Route  path='/StuSecurity' component={StuSecurity}></Route>
        <Route  path='/StuForms' component={StuForm}></Route>
        <Route path='/Feedback' component={Feedback}></Route>

        <Route  path='/reg' component={Registration}></Route>
        <Route path='/update/:feedbackId' component={Update}></Route>
        <Route path='/updatestudent/:regnumber' component={UpdateSudent}></Route>
        
      

       


      </Switch>
    </Router>
      );
}

export default App;
