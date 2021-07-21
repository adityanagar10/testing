import React from 'react'
import './landing.page.scss'
import { Button } from '../button/button.component'

export const LandingPage = () => {
    return(
        <div className="landingPageContainer">
            <div className="wrapper">
           
           <div className="landingPageTitle">
           <h1>Welcome to 🧱📃</h1>
           <p className="content">
           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
           </p>
           <Button />
           </div>
            
            <div className="landingPageImage">
                <img src = '../../../public/assets/image.png' alt=""></img>         
           </div>
        </div>

    </div>
    )
}