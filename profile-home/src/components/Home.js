import Contact from "./Contact";
import './Home.css';

export default function Home() {
    let quote = `Yet we have seen those machines— whether their moving parts are arms and torsos or pistons, ` +
    `wheels, and springs— being put to work to realize impossible fantasies: cathedrals, moon shots, ` +
    `transcontinental railways. Certainly, poetic technologies had something terrible about them; the ` +
    `poetry is likely to be as much of dark satanic mills as of grace or liberation. But the rational, ` + 
    `administrative techniques were always in service to some fantastic end.`;
    quote = quote.toUpperCase();
    return (
        <div>
            <div className="display-quote">{quote}</div>
            <div class="parallaxGirl"></div>
            <Contact />
            <div class="homeBody">
                <p>Hello, I'm Brianna Wang! I'm a student in software engineering.</p>
            </div>
        </div>
    );
}