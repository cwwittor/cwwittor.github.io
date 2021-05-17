import headshot from "../assets/PhotoOfMyself.png";
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
                            <p class= "aboutMePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod urna at neque mattis mollis. Curabitur tincidunt elit at sodales eleifend. Etiam eget dictum arcu, sit amet mattis massa. Curabitur ligula sem, suscipit vitae ultricies eget, lobortis ut ipsum. Suspendisse euismod fringilla eros maximus ultrices. Pellentesque luctus facilisis consectetur. Mauris ac lobortis ligula. Vivamus imperdiet dolor mauris, ut convallis dui tempus ut. Nullam posuere ultrices ligula ut elementum. Vivamus nibh tortor, commodo non nisl vitae, aliquet auctor lectus. Etiam dignissim vitae libero non vestibulum. Aenean iaculis lacus ac libero varius, sed semper dui fringilla. Nunc eget convallis tellus.</p>
                        </div>
                        <div class= "aboutMeDetails">
                            <h2 class= "aboutMeTitle">My Skillset:</h2>
                            <p class= "aboutMePara">In hac habitasse platea dictumst. Vivamus dapibus sed nunc a faucibus. Proin ullamcorper, neque in ultrices finibus, lorem sem dignissim libero, at vulputate lectus lacus sit amet sapien. Donec egestas, ipsum iaculis pulvinar ornare, purus orci malesuada magna, nec porta tellus libero non erat. Proin fermentum consectetur orci blandit pellentesque. Sed sem leo, varius vitae ante nec, laoreet feugiat libero. Nullam quis neque eleifend, molestie nunc eget, mollis felis. Vivamus in dolor a justo egestas sollicitudin. Nulla bibendum volutpat tellus, id congue massa facilisis ac. Cras tempus venenatis mattis. Phasellus ac enim iaculis, feugiat lectus in, sagittis lacus. Praesent est risus, dignissim aliquam orci sed, fringilla eleifend odio.</p>
                        </div>
                        <div class= "aboutMeDetails">
                            <h2 class= "aboutMeTitle">Hobbies and Personal Life:</h2>
                            <p class= "aboutMePara">Pellentesque et mattis felis, id fringilla nisl. Curabitur turpis augue, sagittis vel elementum non, vulputate quis mi. Ut ac volutpat felis. Mauris pellentesque quam sit amet nulla convallis, et malesuada justo placerat. Integer laoreet luctus nunc, sit amet mattis risus lacinia eget. Praesent vel dolor justo. Sed vitae ipsum et velit pretium tristique quis nec orci. Etiam semper tellus eget suscipit facilisis. Cras est est, suscipit eu dui a, lacinia eleifend diam. Quisque eu neque accumsan nisi sollicitudin commodo eu sit amet tellus.</p>
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
