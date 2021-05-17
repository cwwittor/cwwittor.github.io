import burgerGif from "../assets/Burger.gif";
import codeQuizGif from "../assets/code-quiz.gif";
import workSchedulerGif from "../assets/Work-Scheduler.gif";
import weatherDashboardGif from "../assets/weather-dashboard.gif";
import project1Gif from "../assets/BlackJack.gif";
import githubLogo from "../assets/GithubLogo.png";
import "./style.css"; 


function Portfolio() {
    return (
        <body class="frilly">
            <section id="portfolio-hub">
                <div id="header-Of-Port">
                    <h1><u>My Projects</u></h1>
                </div>
                <div class="portfolio-set">
                    <div class="port-info">
                        <h2 class="proj-name">Blackjack Project <a href="https://github.com/cparros/project1"><img src={githubLogo} alt="logo for github" class="github-logo"/></a></h2>
                        <p class="proj-desc">The blackjack project was the first team project I've worked on, this web app allows the user to play blackjack against a dealer.</p>
                        <p class="info-displayed">For this project, I worked in the backend and had written a large percentage of the JavaScript. From this, I displayed knowledge in being able to use 2D arrays, fix bugs, utilize loops to assign/get values, utilize multiple APIs, interact with front-end elements, and communicate with both back-end and front-end developers.</p>
                    </div>
                    <div class="port-gif">
                        <a href="https://cparros.github.io/project1/"><img src={project1Gif} alt="gif of project 1" class="proj-img"/></a>
                    </div>
                </div>
                <hr/>
                <div class="portfolio-set">
                    <div class="port-gif">
                        <a href="https://media-munch.herokuapp.com/"><img src={codeQuizGif} alt="gif of the code quiz" class="proj-img"/></a>
                    </div>
                    <div class="port-info">
                        <h2 class="proj-name">Media Munch Project <a href="https://github.com/chrisrisseler/project2"><img src={githubLogo} alt="logo for github" class="github-logo"/></a></h2>
                        <p class="proj-desc-opposite">The Media Munch project was a project to log movies and games the user has played to share with friends.</p>
                        <p class="info-displayed-opposite">This project utilized knowledge in setting a server, utilizing different API calls, using a different CSS framework, Javascript by using objects, using heroku, and delegating teamwork.</p>
                    </div>
                </div>
                <hr/>
                <div class="portfolio-set">
                    <div class="port-info">
                        <h2 class="proj-name">The Web Dev Game <a href="https://github.com/malenchite/web-dev-game"><img src={githubLogo} alt="logo for github" class="github-logo"/></a></h2>
                        <p class="proj-desc">The Web Dev Game is a web app that allows you to play a game about web development against another person in real time.</p>
                        <p class="info-displayed">This project utilized database management, react,  the moment API to keep track of time, local storage to save dates, arrays(also 2d arrays) to store data, and logic to determine the time of day with loops.</p>
                    </div>
                    <div class="port-gif">
                        <a href="https://the-web-dev-game.herokuapp.com/"><img src={workSchedulerGif} alt="gif of the work scheduler" class="proj-img"/></a>
                    </div>
                </div>
                <hr/>
                <div class="portfolio-set">
                    <div class="port-gif">
                        <a href="https://cwwittor.github.io/hw06-weather-dashboard/"><img src={burgerGif} alt="gif of the burger homework" class="proj-img"/></a>
                    </div>
                    <div class="port-info">
                        <h2 class="proj-name">Yum Burgers! <a href="https://github.com/cwwittor/hw06-weather-dashboard"><img src={githubLogo} alt="logo for github" class="github-logo"/></a></h2>
                        <p class="proj-desc-opposite">The weather dashboard displays the current day's weather(temp, humidity, wind speed, UV index) for a searched city along with a 5-day forecast. It also keeps a search history which can be used to search cities.</p>
                        <p class="info-displayed-opposite">This project utilized multiple weather API calls to get various information, creation of front end objects in JS, saving values to local storage, using arrays, and usage of jquery.</p>
                    </div>
                </div>
                <hr/>
                <div class="portfolio-set">
                    <div class="port-info">
                        <h2 class="proj-name">Weather Dashboard <a href="https://github.com/cwwittor/hw06-weather-dashboard"><img src={githubLogo} alt="logo for github" class="github-logo"/></a></h2>
                        <p class="proj-desc">The weather dashboard displays the current day's weather(temp, humidity, wind speed, UV index) for a searched city along with a 5-day forecast. It also keeps a search history which can be used to search cities.</p>
                        <p class="info-displayed">This project utilized multiple weather API calls to get various information, creation of front end objects in JS, saving values to local storage, using arrays, and usage of jquery.</p>
                    </div>
                    <div class="port-gif">
                        <a href="https://cwwittor.github.io/hw06-weather-dashboard/"><img src={weatherDashboardGif} alt="gif of the weather dashboard" class="proj-img"/></a>
                    </div>
                </div>
            </section>
        </body>
    );
}

export default Portfolio;