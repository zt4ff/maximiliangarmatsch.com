import React, { useContext } from 'react';
import IconUiUxDesign from '../Icons/IconUiUxDesign';
import SectionTemplate from '../components/SectionTemplate';
import { SectionContext } from '../../../../context/SectionContext';

export default function Designer() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplate
            id="Designer"
            aligment="right"
            firstLine="left"
            icon={<IconUiUxDesign />}
            headline={
                <>
                    <span>User Interface</span>
                    <br />
                    <span>User Experience</span>
                </>
            }
            quote="“We put our effort into creating an intuitive experience for
                    your users.”"
            tools={
                <>
                    <span> Figma </span>
                    <br />
                    <span> Adobe Photoshop </span>
                    <br />
                    <span> Adobe Ilustrator </span>
                    <br />
                    <span> Adobe InDesign </span>
                </>
            }
            changeSection={() => {
                setSelectedSection(3);
            }}
        />
    );
}
