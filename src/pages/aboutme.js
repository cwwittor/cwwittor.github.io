import headshot from "../assets/Photograph2.jpg";
import mainFlip from "../assets/MainPage.png";
import { Link } from "react-router-dom";
import "./style.css";

function AboutMe() {
    return (
        <body class="aboutMeBack">

            <section class = "container col-lg-12" id="aboutme-info">
                <div class= "row">
                    <div class= "aboutMeInformation col-lg-6 col-sm-12 col-xs-12">
                        <div class= "aboutMeDetails">
                            <h2 class= "aboutMeTitle">About Me:</h2>
                            <br></br>
                            <p class= "aboutMePara">Hello, my name is Christian Wittorp. I am an aspiring Web Developer fresh out of a bootcamp course in Full-Stack web development and some university computer science classes.</p>
                        </div>
                        <div class= "aboutMeDetails">
                            <h2 class= "aboutMeTitle">My Skillset:</h2>
                            <p class= "aboutMePara">
                                - HTML5, JavaScript, CSS <br></br>
                                - react <br></br>
                                - handlebars, Bootstrap <br></br>
                                - mySQL, MongoDB <br></br>
                                - Express <br></br>
                                - Node JS <br></br>
                                - Adobe Photoshop, Adobe Premiere <br></br>
                                - Communication, Teamwork, Dependable, Critical Thinker <br></br>
                                - Microsoft Excel, Powerpoint, Word <br></br>
                                - Some Python Experience
                            </p>
                        </div>
                        <div class= "aboutMeDetails">
                            <h2 class= "aboutMeTitle">Hobbies and Personal Life:</h2>
                            <p class= "aboutMePara">Aside from spending free time learning new things in the field of Computer Science, there are a lot of things I have found fascinating throughout the years I've been learning. The following is a list of things I enjoy doing and hobbies of mine:</p>
                            <p class= "aboutMePara">
                                - Running(2 miles every day) <br></br>
                                - Hiking <br></br>
                                - Swimming <br></br>
                                - Orienteering <br></br>
                                - Video Games <br></br>
                                - Board Games <br></br>
                                - Anime, Manga <br></br>
                                - Watching Twitch.tv/Youtube <br></br>
                                - Watching NBA/NFL/NCAA/EPL/Esports matches <br></br>
                            </p>
                        </div>
                    </div>
                    <div class= "imageBlock col-lg-6 col-sm-12 col-xs-12">
                        <img src={headshot} alt="this is a photograph of myself" class="selfImage"/>
                    </div>
                    
                    
                </div>

                <Link to="/" class="mainHeadPage"><img src={mainFlip} alt="the flap used for showing the element that can be clicked to switch pages" class="mainImage"/></Link>
                
                
            </section>
        </body>
    );
}

export default AboutMe;
