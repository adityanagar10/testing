import React from 'react';
import './top.bar.styles.scss';

import {Button} from 'antd';
import {useState} from 'react';


export const TopBar = () => {

    const [loading, setLoading] = useState(false);

    const handleClick =() => {
        console.log("I was clicked");
        setLoading(!loading);
    }
    return(
        
            <div className="topbarContainer">
            <div className="wrapper">
           
           <div className="left">
            
               
               <div className="itemContainer">
               
               <h1 style={{color: "white"}}>WallPaper</h1>
               </div>
           </div>
            
            <div className="right">
                <div className="arrange">
               <Button
               style={{backgroundColor: "#8b63ff",color: 'white', borderRadius: "12px",border: 'none'}}
                size="large"
                
                
                className="btn-edit btn-lg"
                loading={loading}
                
                onClick={handleClick}

               > { loading ? null : "LOGIN WITH DISCORD"} </Button>
               </div>
            </div>
           
           </div>
        </div>
        
    )
}