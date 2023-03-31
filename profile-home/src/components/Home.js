import Contact from "./Contact";
import './Home.css';

export default function Home() {
    return (
        <div>
            <div class="parallaxGirl"></div>
            <Contact />
            <div class="homeBody">
                <p>Hello, I'm Brianna Wang! I'm a student in software engineering.</p>
            </div>
        </div>
    );
}