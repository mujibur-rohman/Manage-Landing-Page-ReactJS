import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="img-intro">
                <img src="images/bg-tablet-pattern.svg" alt='bg' className="bg-intro"/>
                <img src="images/illustration-intro.svg" alt="intro" className="illustration"/>
            </div>
            <div className="text-intro">
                <h1 className="title-intro">Bring everyone together to build better products</h1>
                <p className="content-intro">
                    Manage makes it simple for software teams to plan day-to-day 
                    asks while keeping the larger team goals in view.
                </p>
                <div className="button-get btn-intro">Get Started</div>
            </div>
        </div>
    )
}
export default Intro;
