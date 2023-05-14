import './Projects.css';
import platformerLogo from '../assets/2DPlatformerLogo.gif';
import carbonfoodprintLogo from '../assets/carbonfoodprintLogo.png';
import personalWebsiteLogo from '../assets/personalWebsiteLogo.png';
import imessageFriendsLogo from '../assets/imessageFriendsLogo.gif';
import spotifyWebAppLogo from '../assets/spotifyWebAppLogo.gif';

export default function Projects() {
    let project_list = [
        {
            'link': "https://github.com/briannawang/2d-platformer",
            'icon': platformerLogo,
            'projectName': "2D Platformer Game",
            'technologies': "C#, Unity",
            'description': "A 2D platformer game that procedurally generates maps/caves using cellular automata and random walk algorithms"
        },
        {
            'icon': imessageFriendsLogo,
            'projectName': "iMessage History",
            'private': true,
            'technologies': "React, Python, Docker",
            'description': "A web app displaying the entire history of an iMessage group chat as a gift to friends. The chat data was processed using numpy, pandas, and sqlite3, displayed on a React app, and deployed via Docker"
        },
        {
            'icon': null,
            'projectName': "Scala Language Subset Compiler",
            'private': true,
            'technologies': "Scala",
            'description': "A compiler for a subset of the Scala language, able to compile variables, arithmetic expressions, and procedures. The scanner, parser, context-sensitive analysis, stack and heap memory, and assembly/machine language generator were written in Scala"
        },
        {
            'link': "https://github.com/briannawang/spotify-app",
            'icon': spotifyWebAppLogo,
            'projectName': "Custom Spotify Web App",
            'technologies': "React, Javascript, Node.js/Express.js, Heroku",
            'description': "A web app to stream and control music from a web player using the Spotify API, and display/analyze track metadata. The OAuth2 authentication flow and Spotify API/SDK requests for the music player controls, playlist, and track information were handled in an Express server and displayed on a React app"
        },
        {
            'link': "https://github.com/briannawang/covid-19-screening-device",
            'icon': null,
            'projectName': "COVID-19 Screening Device",
            'technologies': "Python, TensorFlow, Raspberry Pi",
            'description': "An automated face mask detector, body temperature sensor, and room capacity counter; a 'prototype' alternative to manual COVID-19 screening. OpenCV and Tensorflow were used for the mask detection model, using information from a live video feed and temperture sensor attached to the Raspberry Pi"
        },
        {
          'link': "https://github.com/briannawang/briannawang.github.io",
          'icon': personalWebsiteLogo,
          'projectName': "Personal Website",
          'technologies': "React, HTML/CSS",
          'description': "A personal website to consolidate my projects. Rebuilt in React for more component reusability/flexibility"
        },
        {
            'link': "https://github.com/briannawang/carbonfoodprint",
            'icon': carbonfoodprintLogo,
            'projectName': "carbonfoodprint",
            'technologies': "Java, Android Studio",
            'description': "An Android app to track/calculate the user's food-based carbon footprint. Submission for Hack the North 2021"
        }
    ]

    const project_list_div = project_list.map((item, i) => {
        return(<a class="contactLink" href={item.link} target="_blank" title={item.link}> 
                    <div class="project-box">
                        <img class="projectsProjectIcon" src={item.icon} width="200px" height="200px"/>
                        <div class='inner-project-box'>
                            <div class='project-heading'>
                                <h3>{item.projectName}</h3>
                                {item.private ? <p className="private-tag">private</p> : <p></p>}
                            </div>
                            <p class="projectLanguage">{item.technologies}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </a>)
    })
    return (
        <div>
            <div className="projectBody">
            <h1>My Projects</h1>
                {project_list_div}
            </div>
        </div>
    );
}