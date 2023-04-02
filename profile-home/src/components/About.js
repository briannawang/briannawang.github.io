import githubProfilePic from '../assets/githubProfilePic.png';
import './About.css';

export default function About() {
    let about_a = `Hi, I'm Brianna, a 2B Software Engineering student at the University of Waterloo. ` +
    `I'm always looking learn about and explore different tools and technologies. In the past, ` +
    `I've been particularly interested in web development and have fullstack and backend experience ` +
    `from internships and personal projects.`;
    let about_b = `In my free time, I enjoy painting/digital art, listening to music, reading, and learning about ` +
    `history/political science.`;

    let quote = `My world foreshortened, flattening into a credit card. Seen head on, things seemed merely skewed, ` +
    `but from the side the view was virtually meaningless—a one-dimensional wafer. Everything about me may have been ` +
    `crammed in there, but it was only plastic. Indecipherable except to some machine.`;
    quote = quote.toUpperCase();

    return (
        <div>
                    <div className="aboutBody">
            <div class="profileContainer">
                <a class="contactLink" href="https://github.com/briannawang" target="_blank" title="https://github.com/briannawang">
                    <div class="flex-child" id="picName">
                        <img class="profilePic" src={githubProfilePic} alt="profile picture" height="150px"/>
                        <h3 class="github-name">Brianna Wang</h3>
                    </div>
                </a>
                <div class="flex-child" id="aboutMe">
                    <h1>About Me</h1>
                    <p>{about_a}</p>
                    <p>{about_b}</p>
                </div>
            </div>
            <div class="furtherInfo">
                <h3>Education</h3>
                <p>University of Waterloo | Bachelor of Software Engineering | 2021 - 2026 (expected)</p>
                <h3>Recent Reading</h3>
                <ul>
                    <li>The Wretched of the Earth | Frantz Fanon</li>
                    <li>The Darker Nations | Vijay Prashad</li>
                    <li>The Sixth Extinction: An Unnatural History | Elizabeth Kolbert</li>
                    <li>1Q84 | Haruki Murkami</li>
                    <li>Kafka On The Shore | Haruki Murkami</li>
                    <li>Hard-Boiled Wonderland and the End of the World | Haruki Murkami</li>
                    <li>Oryx and Crake | Margaret Atwood</li>
                    <li>Mythos | Stephen Fry</li>
                    <li>The Song of Achilles | Madeline Miller</li>
                    <li>Circe | Madeline Miller</li>
                    <li>The Colour Purple | Alice Walker</li>
                    <li>Internet for the People | Ben Tarnoff</li>
                </ul>
            </div>
        </div>
        <div className="display-about-quote">{quote}</div>
        </div>
    );
}