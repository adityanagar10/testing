import React from 'react';
import './top.bar.styles.scss';
import {AppstoreOutlined} from '@ant-design/icons';
import {Button} from 'antd';


export const TopBar = () => {
    return(
        
            <div className="topbarContainer">
            <div className="wrapper">
           
           <div className="left">
            
               
               <div className="itemContainer">
               
               <AppstoreOutlined
                    className="logo-edit"
                    style={{fontSize: '30px'}}
                />
               </div>
           </div>
            
            <div className="right">
                <div className="arrange">
               <button
                type="primary" 
                shape="round"
                className="btn-edit"
               > Login With Discord </button>
               </div>
            </div>
           
           </div>
        </div>
        
    )
}