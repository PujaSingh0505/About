import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg"
    >
   <div className="container-fluid">
     <div className="logo">
      <img src='/assests/logo.png'></img>
      <p>CloudPrism Solutions</p>
     </div>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
             {/* <Link className="navbar-brand" to="/">
               Account Management
             </Link> */}
             <ul className="navbar-nav">
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">About Us</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">Services</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">Resources</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">Events</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">Careers</p>{" "}
               </li>
             </ul>
           </div>
           <div className="button">
                 <button>
                 Contact US
                 </button>
               </div>
         </div>
       </nav>
    </>
  )
}

export default Header
