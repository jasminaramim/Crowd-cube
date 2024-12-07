import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';



const Layout = ({ children }) => {
  return (
    <div>
  <Navbar></Navbar>
      <main>{children}</main> 
      <Outlet></Outlet>
   <div >
   <Footer ></Footer>
   </div>
    </div>
  );
};

export default Layout;
