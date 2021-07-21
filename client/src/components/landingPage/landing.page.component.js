import React from 'react'
import './landing.page.scss'
import { Button } from '../button/button.component'
import Vector from './image.png'

export const LandingPage = () => {
    return(
        <div className="landingPageContainer">
            <div className="wrapper">
           
           <div className="landingPageTitle">
           <h1 className="landingPageHeading">Welcome to 🧱📃</h1>
           <p className="content">
           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
           </p>
           <Button />
           </div>
            
            <div className="landingPageImage">
                <img src={Vector} alt="" />         
           </div>
        </div>

    </div>
    )
}