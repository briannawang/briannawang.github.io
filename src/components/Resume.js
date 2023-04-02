import briannaResume from '../assets/briannaResume.pdf';
import './Resume.css';

export default function Resume() {
    return(<div className="resumeBody">
            <div classname="resume">
                <iframe
                    src={briannaResume}
                    type='application/pdf'
                    title='title'
                />
            </div>
        </div>)
}