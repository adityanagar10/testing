import React from 'react';
import './landing.page.scss';

import {ArrowRightOutlined} from "@ant-design/icons";
import Vector from './landingVector.png';
import { Button } from 'antd';

export const LandingPage = () => {

    return(
        <div className="landingPageContainer">
            <div className="wrapper">
           
           <div className="landingPageTitle">
           <h1 style={{color: "white"}}>Welcome </h1>
           <p className="content">
           At vero eos et accusamus et iusto odio  dignissimos ducimus qui blanditiis.
           At vero eos et accusamus et iusto odio  dignissimos ducimus qui blanditiis.
           </p>
           <Button 
           style={{backgroundColor: "#8b63ff", color: "white", border: "none"}}
           shape="round"
           size="large"
           className="btn-edit">
              <span style={{fontSize: "20px"}} className="mt-2">Browse Wallpapers</span>    <ArrowRightOutlined  style={{fontSize: "24px"}}className="mb-1 ms-5"/>
           </Button>
           </div>
            
            <div className="landingPageImage">
                <img src={Vector} alt="" />         
           </div>



        </div>
        
        
       
        

    </div>
    )
}