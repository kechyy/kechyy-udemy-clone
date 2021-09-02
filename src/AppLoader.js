import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import logo from './ui/udemy-logo.png'
import {
 Route,
 NavLink,
 HashRouter
} from 'react-router-dom';

import './css/uifonts.css';
import './css/props.css';
import './css/App.css';

//Screens
import Header from './screens/header';
import Sidebar from './screens/sidebar';
import HomePage from './screens/home';
import CoursePage from './screens/course';
import DiscoverPage from './screens/discover';
import CategoriesPage from './screens/categories';
import MyCoursesPage from './screens/mycourses';
import AccountPage from './screens/oauth';
import Rightbar from './screens/rightbar';

import { firebaseApp } from './firebase';
global.fire = {
  ID: null
}



function AppLoader() {

  const [isFireUser, setIsFireUser] = useState(false);

  const initFirebase = async (context) => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if(user) {

        setIsFireUser(true);
        console.log("You are signed in...");

      } else {
        console.log("You are guest");
        setIsFireUser(false);
        setTimeout( () => {
          context.setAppLoaded(true)
        }, 500)
        
      }
    })
  }

 const splash = (context) => {
   return (
     <div className="App flex">
       <div className="splash abs abc">
         <img src={logo} className="bl" alt="" />
       </div>
     </div>
   )
 }

 const loadApp = async (context) => {
   await initFirebase(context);
 }

 return (
  <AppContext.Consumer>
    {
     context => {
      return (
        context.appLoaded() ? 
        <div className="App flex">
          <HashRouter>
            <Sidebar />
            <div className="app-content">
              <Route path="/" exact component={HomePage} />
              <Route path="/course/:courseid" component={CoursePage} />
              <Route path="/discover" component={DiscoverPage} />
              <Route path="/cates" component={CategoriesPage} />
              <Route path="/my-courses" component={MyCoursesPage} />
              <Route path="/oauth" component={AccountPage} />
            </div>
            {/* <Rightbar /> */}
        </HashRouter> 
      </div>
        :
       <AppContext.Consumer>
         {
           context => {
             loadApp(context);
             return (splash(context))
           }
         }
       </AppContext.Consumer>
      )
     }
    }
  </AppContext.Consumer>
 )
}

export default AppLoader
