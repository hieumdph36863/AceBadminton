import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderWeb from './layout/header';
import FooterWebsite from './layout/footer';



const LayoutWebsite = () => {
    return (
        <div>
         <HeaderWeb/>
          
           <Outlet/>
         
          <FooterWebsite/>
        </div>
      );
}

export default LayoutWebsite