import React, { useEffect } from 'react'

function CategoriesPage() {
useEffect(() => {
 document.title = "Categories"
 return () => {
  
 }
})

 return (
  <div className="app-page rel">
     <h2 className="page-title s24 fontb c333">Categories</h2>
  </div>
 )
}

export default CategoriesPage;
