

import Person  from "./assets/Profile.png"
import linkedin  from "./assets/linkedin.svg"
import Mail from "./assets/Mail.svg"
import GitHubIcon from "./assets/GitHub Icon.svg"
import InstagramIcon from "./assets/Instagram Icon.svg"
import FacebookIcon from "./assets/Facebook Icon.svg"
import TwitterIcon from "./assets/Twitter Icon.svg"


function Container(){
    return (
    <div className="container">
         <div className="container--img">
            <img src={Person}></img>
         </div>
         <div className="intrduce--container">
            <h1>Laura Smith</h1>
            <h3>Laura Smith</h3>
            <h4>Laura Smith</h4>
            </div>
            <div className="btn--social--container">
                        <button className="btn--email">Email</button>
                        <img className= "email--img"src={Mail}></img>

                        <button className="btn--linkedin">LinkedIn</button>

            <img className= "linkedin--img"src={linkedin}></img>
            
            

        </div>
        <div>
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            
        </div>
        <div className="footer--container">
        <img className= "twitter--img"src={TwitterIcon}></img>
        <img className= "facebook--img"src={FacebookIcon}></img>
        <img className= "instagram--img"src={InstagramIcon}></img>
        <img className= "github--img"src={GitHubIcon}></img>


        </div>
        
            
    </div>
    )
}
export default Container
