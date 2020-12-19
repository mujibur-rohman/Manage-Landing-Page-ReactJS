import React from 'react';
import './Testi.css'

const Testi = () => {
    return (
        <div className="testi">
            <h1 className="title-testi">What they’ve said</h1>
            <div className="list-testi">
                <div className="list-item-testi">
                    <img className="avatar" src="images/avatar-ali.png" alt="avatar"/>
                    <h2 className="name-avatar">Ali Bravo</h2>
                    <p className="content-testi">
                        “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”
                    </p>
                </div>
                <div className="list-item-testi">
                    <img className="avatar" src="images/avatar-richard.png" alt="avatar"/>
                    <h2 className="name-avatar">Richard Watts</h2>
                    <p className="content-testi">
                        “Manage allows us to provide structure and process. It keeps us organized 
                        and focused. I can’t stop recommending them to everyone I talk to!”
                    </p>
                </div>
                <div className="list-item-testi">
                    <img className="avatar" src="images/avatar-anisha.png" alt="avatar"/>
                    <h2 className="name-avatar">Anisha Lee</h2>
                    <p className="content-testi">
                        “Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”
                    </p>
                </div>
                <div className="list-item-testi">
                    <img className="avatar" src="images/avatar-shanai.png" alt="avatar"/>
                    <h2 className="name-avatar">Shanai Gough</h2>
                    <p className="content-testi">
                        “Their software allows us to track, manage and collaborate on our projects 
                        from anywhere. It keeps the whole team in-sync without being intrusive.”
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Testi;
