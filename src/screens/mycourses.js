import React, {useEffect} from 'react'

function MyCoursesPage() {

 useEffect(() => {
  document.title = "My Course";
  return () => {
  }
 })

 return (
  <div className="app-page rel">
     <h2 className="page-title s24 fontb c333">My Courses</h2>
  </div>
 )
}

export default MyCoursesPage;
