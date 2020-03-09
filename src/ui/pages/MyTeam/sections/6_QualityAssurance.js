import React, { useContext } from 'react';
import IconQualityAssurance from '../Icons/IconQualityAssurance';
import SectionTemplate from '../components/SectionTemplate';
import { SectionContext } from '../../../../context/SectionContext';

export default function QualityAssurance() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplate
            id="QualityAssurance"
            aligment="left"
            firstLine="right"
            icon={<IconQualityAssurance />}
            headline={<span>Quality Assurance</span>}
            quote="“We test your application to perfection!”"
            tools={
                <>
                    <span> Cypress.JS </span>
                    <br />
                    <span> Selenium </span>
                    <br />
                    <span> Browserstack.com </span>
                </>
            }
            changeSection={() => {
                setSelectedSection(6);
            }}
        />
    );
}
