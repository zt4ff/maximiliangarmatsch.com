import React, { useContext } from 'react';
import IconSoftwareEngineering from '../Icons/IconSoftwareEngineering';
import SectionTemplate from '../components/SectionTemplate';
import { SectionContext } from '../../../../context/SectionContext';

export default function SoftwareEngineer() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplate
            id="SoftwareEngineer"
            aligment="left"
            firstLine="right"
            icon={<IconSoftwareEngineering />}
            headline={<span>Software Engineering</span>}
            quote="“We use modern technology to bring your ideas to life, store data securely and ensure the availability of the server around the clock.”"
            tools={
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
            }
            changeSection={() => {
                setSelectedSection(4);
            }}
        />
    );
}
