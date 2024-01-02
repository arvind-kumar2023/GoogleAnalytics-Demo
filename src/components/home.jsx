import '../App.css';
import { analyticsEvent } from '../firebaseConfig';
import { useEffect } from 'react';

const Home = () => {
      // Google Analytics 
      useEffect(() => {
        analyticsEvent("home")
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome To Google Analytics</h1>
                <p className='p-4'>Google Analytics is a web analytics service provided by 
                    Google that allows website owners and marketers to track 
                    and analyze various aspects of website traffic and user behavior. 
                    It provides valuable insights into how visitors interact with a website, 
                    helping businesses make informed decisions to improve their online presence and performance.
                    </p>
            </header>
        </div>
    )
}

export default Home