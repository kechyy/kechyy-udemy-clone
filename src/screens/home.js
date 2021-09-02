import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Course1 from '../ui/course-1.png';
import Course2 from '../ui/course-2.jpeg';

function HomePage() {
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
  }  
 ]);

  const [topTutors, setTopTutors] = useState([
   {
     ID: 1,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 1
   },
   {
     ID: 2,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 2
   },
   {
     ID: 3,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 3
   }, 
   {
     ID: 4,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 4
   },
   {
     ID: 5,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 5
   },
   {
     ID: 6,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 6
   }, 
 ])


 // Live Tutors List
 const tutorList = [];
 for(let i = 0; i < 8; i++) {
  tutorList.push(
    <button className="tutor rel" key={`tutor${i}`}>
       <img src={`https://placeimg.com/100/100/people?${i}`} alt="" className="bl"/>
    </button>
  );
 }


 const courseList = popularCourse.map( (course,i) => {
   return (
     <NavLink to={`/course/${course.ID}`} alt="" className="course rel" key={`popular-course${i}`}>
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
    </NavLink>
   )
 })

 const topTutorsList = topTutors.map( (topTutor,i) => {
  
   return (
     <a href="#" alt="" className="user-block rel noul" key={`top-tutors${i}`}>
        <div className="user aic flex">
          <div className="pic">
            <img src={topTutor.dp} className="bl" alt=""/>
          </div>
          <div className="meta rel">
            <h2 className="s15 name fontb c333">{topTutor.name}</h2>
            <h2 className="s15 uname fontn c333">@{topTutor.username}</h2>
          </div>
        </div>
     </a>
   )
 })

    

  return (
  <div className="home-page rel">
   {/* Tutor Live Now */}
    <div className="section rel">
     <h2 className="title s24 fontb">
      Streaming  <span className="fontn">Now</span>
     </h2>
      <div className="tutors rel flex">
        {tutorList}
      </div>
    </div>

    {/* Popular Courses */}
    <div className="section section-b rel">
     <h2 className="title s24 fontb">Popular  
       <span className="fontn">This Week</span>
     </h2>
      <div className="courses rel flex">
        {courseList}
      </div>
    </div>

    {/* Top Tutors*/}
    <div className="section section-b rel">
     <h2 className="title s24 fontb">Top  
       <span className="fontn">Tutors</span>
     </h2>
      <div className="top-tutors rel flex">
        {topTutorsList}
      </div>
    </div>
    
  </div>
 )
}

export default HomePage
