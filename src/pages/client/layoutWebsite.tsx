import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderWeb from './layout/header';
import FooterWebsite from './layout/footer';
import Content from './layout/main';


const LayoutWebsite = () => {
    return (
        <div>
         <HeaderWeb/>
          
            <Content/>
         
          <FooterWebsite/>
        </div>
      );
}

export default LayoutWebsite