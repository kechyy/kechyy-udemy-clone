import React, {useState} from 'react';
import Course1 from '../ui/course-1.png';
import Course2 from '../ui/course-2.jpeg';

import Cake from '../ui/cake.png';

function Rightbar() {

 const [popularCourse, setPopularCourse] = useState([
  {
   ID: 1,
   title: 'Learning How to Create Beautiful Scenes in Illustrator in 60 min',
   tutor: {
     ID: 1,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 1
    },
    duration: '82 min',
    poster: Course1
  },
  {
   ID: 2,
   title: 'Creating a beautifyl Portrait Illustration. Learning new Technics and Tricks',
   tutor: {
     ID: 2,
     name: 'Uran Design',
     username: 'urancd',
     dp: `https://placeimg.com/100/100/people?tutor-` + 2
    },
    duration: '1 hr 13 min',
    poster: Course2
  },
  {
   ID: 3,
   title: 'Creating a beautifyl Portrait Illustration. Learning new Technics and Tricks',
   tutor: {
     ID: 3,
     name: 'Uran Design',
     username: 'urancd',
     dp: `https://placeimg.com/100/100/people?tutor-` + 3
    },
    duration: '1 hr 13 min',
    poster: Course2
  }

 ]);


 const courseList = popularCourse.map( (course,i) => {
   return (
     <a href="#" alt="" className="course rel" key={`popular-course${i}`}>
       <div  style={{
         background: `#e2e2e2 url(${course.poster}) no-repeat center`
       }} className="block rel">
         <div className="user abs aic flex">
           <div className="pic">
             <img src={course.tutor.dp} className="bl" alt=""/>
           </div>
           <div className="meta rel">
             <h2 className="s15 name fontb cfff">{course.tutor.name}</h2>
             <h2 className="s15 uname fontb cfff">@{course.tutor.username}</h2>
           </div>
         </div>

         <div className="dura abs ">
           <h2 className="s13 name fontb cfff">{course.duration}</h2>
         </div>

         <div className="course-title abs ">
           <h2 className="s13 name fontb cfff">{course.title}</h2>
         </div>

       </div>
    </a>
   )
 })

 return (
  <div className="rightbar rel">

    <div className="section rel">
     <h2 className="title s24 fontb">Advanced  
       <span className="fontn">Search</span>
     </h2>
      <div className="search-box rel flex">
        <input type="text" placeholder="Start writing something..." className="qry s15 fontb"/>
        <button className="go cfff s15 fontb">Find</button>
      </div>
    </div>

    <div className="section section-b rel">
      <div className="courses rel flex">
        <div className="course-a">
          { courseList[0] }
         </div>
        <div className="flex cols">
          { courseList[1]}
          { courseList[2]}
        </div>
      </div>
    </div>
    
    <div className="section rel">
     <h2 className="title s24 fontb">Special  
       <span className="fontn">Offers</span>
     </h2>
      <div className="special-offer rel flex">
        <div className="meta rel">
          <h1 className="h1 s20 fontb">50 Days of Premium</h1>
          <h2 className="h2 s14 fontb">Get it before 5.5.2020</h2>
          <button className="s13 fontb">Learn more</button>
        </div>
        <div className="vector rel">
          <img src={Cake} alt=""/>
        </div>

        <div className="ring abs" />
      </div>
    </div>

  </div>
 )
}

export default Rightbar;
