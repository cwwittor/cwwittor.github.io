import linkedIn from "../assets/LinkedIn.png";
import github from "../assets/GithubLogoFilled.png";
import mail from "../assets/free-mail-icon-142-thumb.png";
import aboutFlip from "../assets/AboutMeTemp.png";
import { Link } from "react-router-dom";
import "./style.css";

//the main page
function Index() {
    return (
        <section class="frontpage">

            <section class = "container" id="front-page-info">
                    <div class= "row">
                        <div class = "frontPageTitle col-5">
                            <h2 class = "nameFront">Christian Wittorp</h2>
                            <h3 class = "titleFront">Backend Developer</h3>
                                <span class= "icons-main">
                                    <div class= "ind-icon">
                                        <a href="https://www.linkedin.com/in/christian-wittorp-2341b0142/"><img src={linkedIn} alt="linkedIn logo" class="github-logo"/></a>
                                    </div>
                                    <div class= "ind-icon">
                                        <a href="https://github.com/cwwittor"><img src={github} alt="github logo" class="github-logo"/></a>
                                    </div>
                                    <div class= "ind-icon">
                                        <a href="mailto:cwwittor@ncsu.edu"><img src={mail} alt="mail logo" class="github-logo"/></a>
                                    </div>
                                </span>
                            
                        </div>
                    </div>

                    <Link to="/aboutme" class="aboutMePage"><img src={aboutFlip} alt="page turn for aboutme page" class="aboutImage"/></Link>
                    
                    
            </section>
        </section>
    );
}

export default Index;
