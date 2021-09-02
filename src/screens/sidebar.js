import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../ui/udemy-logo.png'


const Sidebar = () => {

  const [navs, setNavs] = useState([
    {label: 'Home', slug: '/', icon: 'icon-home_24px_outlined'},
    {label: 'Discover', slug: 'discover', icon: 'icon-local_offer_24px_outlined'},
    {label: 'Categories', slug: 'cates', icon:'icon-list_24px_outlined'},
    {label: 'My Courses', slug: 'my-courses', icon: 'icon-card_travel_24px_outlined'}
  ]);

  const [currentPage, setCurrentPage] = useState('/');
  
  const navigation = [];
  navs.map(( nav,i)  => {
    navigation.push(
       <li key={'nav-' + i + '-' + nav.slug}>
        <NavLink to={nav.slug} className={"aic link noul flex c333 " + (currentPage === nav.slug ? 'on' : '')} >
          <div className={`ico s20 ${nav.icon}`} />
          <h2 className="lbl s20">{nav.label}</h2>
        </NavLink>
      </li>
    )
  })
  console.log(global.fire)
 return (
  <div className="sidebar rel">
    <a href="#" className="logo bl">
      <img src={logo} className="bl" alt="" />
    </a>

    <ul className="nav">
      {navigation}
    </ul>
    
    <div className="updated-course flex aic">
      <div className="icon-lightbulb_24px_outlined ico cfff s24"></div>
      <div className="lbl s15 fontb c333">
        Updated Courses 
        <h2 className="author s13 c777">My Kamran Wajdani </h2>
      </div>
    </div>

    <div className="stats aic  flex">

      <div className="stats-box flex" >
        <div className="ico ico-points icon-shield" />
        <h2 className="val s13 c333 fontb">points </h2>   
        <h2 className="lbl s13 c777">points </h2>   
      </div>
      
      <div className="stats-box flex" >
        <div className="ico ico-battery icon-battery_charging_full_24px_outlined" />
        <h2 className="val s13 c333 fontb">45.3% </h2>   
        <h2 className="lbl s13 c777">complete </h2>   
      </div>

    </div>

     <div className="me flex aic">
      { global.fire.ID ? 
      <React.Fragment> 
        <div className="photo cfff s24">
          <img src="https://placeimg.com/100/100/people" alt="" className="bl"/>
        </div>
        <div className="lbl s15 fontb c333">
          Kamran Wadjami
          <h2 className="uname s13 c777">@kamranwadjami </h2>
        </div>
      </React.Fragment> : 
      <NavLink to={"/oauth"} className="aic link noul flex c333 " >
        <div className="ico s24 rel cfff icon-user" />
        <h2 className="lbl s20 fontb">Sign in</h2>
      </NavLink>
      }
    </div>
  </div>
 )
}

export default Sidebar
