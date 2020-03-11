import React from 'react';
import IconServerAdminMobile from '../../Icons/Mobile/IconServerAdminMobile';
import IconServerAdminDesktop from '../../Icons/Desktop/IconServerAdminDesktop';

export const data = {
    id: 'Deployment',
    iconMobile: <IconServerAdminMobile />,
    iconDesktop: <IconServerAdminDesktop />,
    headline: <span>Server Admin</span>,
    quote:
        '“We manage the physical Server on which your Data is stored and I deploy to the Apple Appstore and Google Play Store”',
    tools: (
        <>
            <span> Ubuntu </span>
            <br />
            <span> Docker </span>
            <br />
            <span> GitHub </span>
            <br />
            <span> XCode </span>
            <br />
            <span> Android Studio </span>
            <br />
            <span> Bash </span>
        </>
    ),
};
