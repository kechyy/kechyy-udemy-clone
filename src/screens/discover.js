import React, { useEffect } from 'react'

function DiscoverPage() {

 useEffect(() => {
  document.title = "Discover"
  return () => {
  }
 })

 return (
  <div className="app-page rel">
     <h2 className="page-title s24 fontb c333">Discover</h2>
  </div>
 )
}

export default DiscoverPage;
