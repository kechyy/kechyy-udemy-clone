import React from 'react';
import {
  route,
  HashRouter,
  Route,
  
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
import Rightbar from './screens/rightbar';

import * as fire_base from 'firebase/app';
global.firebase = fire_base;

const firebaseConfig = {
  apiKey: "AIzaSyB9IR97T7MCWPiC8skZFW-f561NsejccGM",
  authDomain: "kechyy-udemy-clone.firebaseapp.com",
  projectId: "kechyy-udemy-clone",
  storageBucket: "kechyy-udemy-clone.appspot.com",
  messagingSenderId: "627817720153",
  appId: "1:627817720153:web:87b24d1b94efb3421ac448"
};

global.firebase.initializeApp(firebaseConfig);

function App() {

  const initFirebase = async () => {
    global.firebase.auth().onAuthStateChanged((user) => {
      console.log('user>>>', user);
    })
  }

  return (
    <div className="App flex">
      <HashRouter>
        <Sidebar />
        <div className="app-content">
          <Route path="/" exact component={HomePage} />
          <Route path="/course/:courseid" component={CoursePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/cates" component={CategoriesPage} />
          <Route path="/my-courses" component={MyCoursesPage} />
        </div>
        {/* <Rightbar /> */}
      </HashRouter>
      
    </div>
  );
}

export default App;
