import React, {useState, useEffect} from 'react';
import Course1 from '../ui/course-1.png';
import Course2 from '../ui/course-2.jpeg';

function CoursePage(props) {
 const [course, setCourse] = useState(
  {
   ID: 1,
   title: 'Learning How to Create Beautiful Scenes in Illustrator in 60 min',
   about: "In this course I’ll teach you how to make your illustration look really good. We’re gonna study a lot of cases here, setting your work panel, making some awesome actions and presets for future.<br/>Hope you’ll get some really useful stuff out of this course. Good Luck to all.",
   tutor: {
     ID: 1,
     name: 'Lana Marandina',
     username: 'lanamara',
     dp: `https://placeimg.com/100/100/people?tutor-` + 1
    },
   duration: '82 min',
   poster: Course1,
   videos: [
      {
       ID: 1,
       title: 'introduction',
       duration: '03 min 24 secs'
      },
      {
       ID: 2,
       title: 'Get Started',
       duration: '09 min 55 secs'
      },
      {
       ID: 3,
       title: 'The Illustration',
       duration: '62 min 48 secs'
      }
    ]
  },
 );

 useEffect(() => {
  document.title = "Udemy"
  return () => {
   
  }
 })
 
 const courseID = props.match.params.courseid;
 const courseVideos = course.videos.map((video,i) => {
   return (
    <a href="#" key={`course-video-${i}`} className="noul  rel flex">
      <div className="id s18 fontn cfff">{video.ID}</div>
      <div className="meta rel">
        <h1 className="s15 lbl fontb c333">{video.title}</h1>
        <h1 className="s13 dur fontn c777">{video.duration}</h1>
      </div>
    </a>
   )
 })
  return (
  <div className="course-page rel flex">

    <div className="course-info rel">
        <div className="tutor rel aic flex">
         <div className="pic">
           <img src={course.tutor.dp} className="bl" alt=""/>
         </div>
         <div className="meta rel">
           <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
           <h2 className="s15 uname fontb c777">Course Tutor</h2>
         </div>
       </div>

       <div className="course-meta">
          <h2 className="s24 title fontb c777">{course.title}</h2>
          <p className="s18 about fontn c777" dangerouslySetInnerHTML={{__html: course.about}}></p>
       </div>

       <div className="section section-b rel">
          <h2 className="s24 title fontb c777">Course <span className="fontn">
          </span>Achievements</h2>
          <div className="course-stats aic flex">
           <div className="stats-box flex" >
             <div className="ico ico-points s24 icon-shield" />
             <h2 className="val s13 c333 fontb">1800 </h2>   
             <h2 className="lbl s13 c777">points </h2>   
           </div>
         
           <div className="stats-box flex" >
             <div className="ico ico-battery icon-battery_charging_full_24px_outlined" />
             <h2 className="val s13 c333 fontb">45.3% </h2>   
             <h2 className="lbl s13 c777">complete </h2>   
           </div>

           <div className="stats-box flex" >
            <div className="ico ico-battery icon-battery_charging_full_24px_outlined" />
            <h2 className="val s13 c333 fontb">+26 </h2>   
            <h2 className="lbl s13 c777">Level </h2>   
          </div>
       </div> 

       <div className="section section-b rel">
          <h2 className="s20 title fontb c777">Course <span className="fontn">
             </span>Details</h2>
          <div className="course-videos aic flex">
            {courseVideos}
          </div>
      </div>
     </div>
    </div>

    <div className="course-preview rel">
       <div className="player rel">
         <video poster={course.poster} />
         <div className="cntrls abs aic flex">
           <button className="icon-pause s24 pp" />
           <div className="timer rel fontn s15 cff">
             02:54 / 09: 55
           </div>
           <div className="slider rel">
             <div className="prog rel">
               <div className="bar rel" >
                 <div className="knob abs" />
               </div>
             </div>
           </div>
           <button className="icon-volume_up_24px_outlined s24 vol" />
           <button className="icon-fullscreen_exit_24px_outlined s24 fs" />
         </div>
       </div>

      <div className="extra-block rel flex">
        
        <div className="chat rel">
          <div className="section section-b rel">
            <h2 className="s20 title fontb c777">Quick <span className="fontn">
               </span>Chat</h2>
             <div className="messages aic flex">
               <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>
               </div>
                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">Love this course...</h2>
               </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">Hey</h2>
               </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">Dope Intro, thanks!@</h2>
               </div>
             </div>
          </div>
        </div>
        <div className="now-watching rel">
           <div className="tooltip abs fontn s13 cfff">86 Live Now</div>
           <div className="section section-b rel">
             <h2 className="s16 title fontb c777">Now <span className="fontn">
               </span>Watching</h2>
             <div className="you-list rel">
               <div className="you rel aic flex">
                <div className="pic">
                  <img src="https://placeimg.com/100/100/people?guest-1" className="bl" alt=""/>
                </div>
                <div className="meta rel">
                  <h2 className="s14 name fontb c333">Grey Montgommery</h2>
                  <h2 className="s13 uname fontb c777">@gregdomm</h2>
                </div>
              </div>

              <div className="you rel aic flex">
                <div className="pic">
                  <img src="https://placeimg.com/100/100/people?guest-2" className="bl" alt=""/>
                </div>
                <div className="meta rel">
                  <h2 className="s15 name fontb c333">Laila Jefferson</h2>
                  <h2 className="s15 uname fontb c777">@lailaearns</h2>
                </div>
              </div>

              <div className="you rel aic flex">
                <div className="pic">
                  <img src="https://placeimg.com/100/100/people?guest-3" className="bl" alt=""/>
                </div>
                <div className="meta rel">
                  <h2 className="s15 name fontb c333">Laila Jefferson</h2>
                  <h2 className="s15 uname fontb c777">@lailaearns</h2>
                </div>
              </div>

              <div className="you rel aic flex">
                <div className="pic">
                  <img src="https://placeimg.com/100/100/people?guest-4" className="bl" alt=""/>
                </div>
                <div className="meta rel">
                  <h2 className="s15 name fontb c333">Laila Jefferson</h2>
                  <h2 className="s15 uname fontb c777">@lailaearns</h2>
                </div>
              </div>
              
            </div>
          </div>
         </div>
            
      </div>
    </div>
    
</div>)}

export default CoursePage;
