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
           <div className="layer3">
      
           </div>





        </div>
        
        <div className="layer1">
        <svg width="1706" height="398" viewBox="0 0 1706 398" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 398V179.794C262.534 223.673 472.704 162.052 635.603 95.4326C1047.29 -72.9319 1483.27 17.0333 1706 95.4326V398H0Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint1_linear" x1="1132.32" y1="-54.7181" x2="1074.38" y2="435.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#8B63FF"/>
<stop offset="1" stop-color="#1E0074"/>
</linearGradient>
</defs>
</svg>


        </div>
        <div className="layer2">
        <svg width="1706" height="319" viewBox="0 0 1706 319" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 319V126.697C221.472 185.27 477.964 142.575 611.06 97.2927C1033.42 -80.0142 1509.81 25.5466 1706 96.9987V319H0Z" fill="url(#paint2_linear)"/>
<defs>
<linearGradient id="paint2_linear" x1="972.491" y1="80.2733" x2="921.8" y2="412.723" gradientUnits="userSpaceOnUse">
<stop stop-color="#02A6EC"/>
<stop offset="1" stop-color="#415DF8" stop-opacity="0.48"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className="layer3">
        <svg width="1706" height="227" viewBox="0 0 1706 227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 227V121.34C101.307 147.38 226.046 153.546 275.753 153.374C478.84 158.747 718.575 92.9228 813.057 59.3389C1181.83 -48.1296 1562.01 14.5604 1706 59.3389V227H0Z" fill="url(#paint3_linear)"/>
<defs>
<linearGradient id="paint3_linear" x1="715.419" y1="43.1424" x2="802.909" y2="476.913" gradientUnits="userSpaceOnUse">
<stop stop-color="#07158C"/>
<stop offset="1" stop-color="#3AF9EF"/>
</linearGradient>
</defs>
</svg>



     </div>
     
        
        
       
        

    </div>
    )
}