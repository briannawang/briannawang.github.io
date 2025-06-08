import githubProfilePic from '../assets/githubProfilePic.jpeg';
import './About.css';

const reading_list = [
    {
        'title': "Sputnik Sweetheart",
        'author': "Haruki Murakami",
    },
    {
        'title': "The Death of Ivan Ilyich",
        'author': "Leo Tolstoy",
    },
    {
        'title': "The Wind-Up Bird Chronicle",
        'author': "Haruki Murakami",
    },
    {
        'title': "The Wretched of the Earth",
        'author': "Frantz Fanon"
    },
    {
        'title': "The Darker Nations",
        'author': "Vijay Prashad"
    },
    {
        'title': "The Sixth Extinction: An Unnatural History",
        'author': "Elizabeth Kolbert"
    },
    {
        'title': "1Q84",
        'author': "Haruki Murakami"
    },
    {
        'title': "Kafka On The Shore",
        'author': "Haruki Murakami"
    },
    {
        'title': "Hard-Boiled Wonderland and the End of the World",
        'author': "Haruki Murakami"
    },
    {
        'title': "The Song of Achilles",
        'author': "Madeline Miller"
    },
    {
        'title': "Circe",
        'author': "Madeline Miller"
    },
    {
        'title': "The Colour Purple",
        'author': "Alice Walker"
    },
    {
        'title': "Internet for the People",
        'author': "Ben Tarnoff"
    },
    {
        'title': "The Illustrated Man",
        'author': "Ray Bradbury"
    }
]

const about = [
    `Hi, I'm Brianna, a 3B Software Engineering student at the University of Waterloo. 
    I'm always excited to learn new things, and am especially curious about distributed systems.`,
    `In my free time, I enjoy painting/digital art, listening to music, reading, and learning about 
    history/political science.`
];

const quote = `My world foreshortened, flattening into a credit card. Seen head on, things seemed merely skewed, 
but from the side the view was virtually meaningless—a one-dimensional wafer. Everything about me may have been 
crammed in there, but it was only plastic. Indecipherable except to some machine.`.toUpperCase();

function sortByAuthor(a, b) {
    return a.author.split(" ")[1].charAt(0) < b.author.split(" ")[1].charAt(0) ? -1 : 1;
}

export default function About() {
    const reading_list_div = reading_list.sort(sortByAuthor).map((item, _) => {
        return(<li>{item.title} | {item.author}</li>)
    })

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
                    <p>{about[0]}</p>
                    <p>{about[1]}</p>
                </div>
            </div>
            <div class="furtherInfo">
                <h3>Education</h3>
                <p>University of Waterloo | Bachelor of Software Engineering | 2021 - 2026 (expected)</p>
                <h3>Recent Reading</h3>
                <ul>
                    {reading_list_div}
                </ul>
            </div>
        </div>
        <div className="display-about-quote">{quote}</div>
        </div>
    );
}