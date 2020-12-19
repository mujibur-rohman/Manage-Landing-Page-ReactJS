import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <div className="service-content-1">
                <h1 className="title-service-content-1">
                    What’s different about Manage?
                </h1>
                <p className="sub-service-content-1">
                    Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. 
                </p>
            </div>
            <div className="service-content-2">
                <div className="list-service-item">
                    <p className="title-list-service"><span>01</span> Track company-wide progress</p>
                    <p className="list-service-content">
                        See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.
                    </p>
                </div>
                <div className="list-service-item">
                    <p className="title-list-service"><span>02</span> Advanced built-in reports</p>
                    <p className="list-service-content">
                            Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                    </p>
                </div>
                <div className="list-service-item">
                    <p className="title-list-service"><span>03</span> Everything you need in one place</p>
                    <p className="list-service-content">
                         Stop jumping from one service to another to communicate, store files, 
                         track tasks and share documents. Manage offers an all-in-one team 
                         productivity solution.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
