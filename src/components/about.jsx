import { useEffect } from 'react';
import '../App.css';
import { analyticsEvent } from '../firebaseConfig';

const About = () => {
       // Google Analytics 
       useEffect(() => {
        analyticsEvent("about")
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <h1>About US</h1>
                <p className='p-4'>Get a complete understanding of your customers across devices and platforms. 
                    Google Analytics gives you the tools, free of charge, to understand the customer journey and improve marketing ROI.</p>
            </header>
        </div>
    )
}

export default About