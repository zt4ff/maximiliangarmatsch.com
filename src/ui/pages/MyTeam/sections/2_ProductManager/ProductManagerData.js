import React from 'react';
import IconProductManagerMobile from '../../Icons/Mobile/IconProductManagerMobile';
import IconProductManagerDesktop from '../../Icons/Desktop/IconProductManagerDesktop';

export const data = {
    id: 'ProductManager',
    iconMobile: <IconProductManagerMobile />,
    iconDesktop: <IconProductManagerDesktop />,
    headline: (
        <>
            <span>Product Manager</span>
            <br />
            <span>Team Lead</span>
        </>
    ),
    quote:
        '“We put our effort into creating an intuitive experience for your users.”',
    tools: (
        <>
            <span> Jira </span>
            <br />
            <span> Project management </span>
            <br />
            <span> Google Suite </span>
            <br />
            <span> Figma </span>
            <br />
            <span> Github</span>
        </>
    ),
};
