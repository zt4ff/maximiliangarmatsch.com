import React from 'react';
import IconQualityAssuranceMobile from '../../Icons/Mobile/IconQualityAssuranceMobile';
import IconQualityAssuranceDesktop from '../../Icons/Desktop/IconQualityAssuranceDesktop';

export const data = {
    id: 'QualityAssurance',
    iconMobile: <IconQualityAssuranceMobile />,
    iconDesktop: <IconQualityAssuranceDesktop />,
    headline: <span>Quality Assurance</span>,
    quote: '“We test your application to perfection!”',
    tools: (
        <>
            <span> Cypress.JS </span>
            <br />
            <span> Selenium </span>
            <br />
            <span> Browserstack.com </span>
        </>
    ),
};
