import React from 'react';
import '../styles/styles.css';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg"
    >
   <div className="container-fluid">
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
             {/* <Link className="navbar-brand" to="/">
               Account Management
             </Link> */}
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">abcd</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">abcd</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">abcd</p>{" "}
               </li>
               <li className="nav-item" >
                 {" "}
                 <p className="nav-link">abcd</p>{" "}
               </li>
             </ul>
             <li className="nav-item">
                 <button className="btn btn-primary">
                 Contact Us
                 </button>
               </li>
           </div>
         </div>
       </nav>
    </>
  )
}

export default Header
