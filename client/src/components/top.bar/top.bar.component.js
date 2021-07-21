import React from 'react';
import './top.bar.styles.scss';
import {AppstoreOutlined} from '@ant-design/icons';


export const TopBar = () => {
    return(
        
            <div className="topbarContainer">
            <div className="wrapper">
           
           <div className="left">
            
               
               <div className="itemContainer">
               
               <sapn><AppstoreOutlined
                    style={{fontSize: '30px'}}
                /></sapn>
               </div>
           </div>
            
            <div className="right">
                <div className="arrange">
               <h1>
                   Log In with Discord
               </h1>
               </div>
            </div>
           
           </div>
        </div>
        
    )
}