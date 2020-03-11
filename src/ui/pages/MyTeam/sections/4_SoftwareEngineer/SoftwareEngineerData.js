import React from 'react';
import IconSoftwareEngineeringMobile from '../../Icons/Mobile/IconSoftwareEngineeringMobile';
import IconSoftwareEngineeringDesktop from '../../Icons/Desktop/IconSoftwareEngineeringDesktop';

export const data = {
    id: 'Designer',
    iconMobile: <IconSoftwareEngineeringMobile />,
    iconDesktop: <IconSoftwareEngineeringDesktop />,
    headline: <span>Software Engineering</span>,
    quote:
        '“We use modern technology to bring your ideas to life, store data securely and ensure the availability of the server around the clock.”',
    tools: (
        <>
            <span> React.JS </span>
            <br />
            <span> Node.JS / Firebase </span>
            <br />
            <span> Flutter / Cordova </span>
            <br />
            <span> SQL / NoSQL </span>
            <br />
            <span> Git </span>
            <br />
        </>
    ),
};
