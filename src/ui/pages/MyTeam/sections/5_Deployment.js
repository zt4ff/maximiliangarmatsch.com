import React, { useContext } from 'react';
import IconServerAdmin from '../Icons/IconServerAdmin';
import SectionTemplate from '../components/SectionTemplate';
import { SectionContext } from '../../../../context/SectionContext';

export default function Deployment() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplate
            id="Deployment"
            aligment="right"
            firstLine="left"
            icon={<IconServerAdmin />}
            headline={<span>Server Admin</span>}
            quote="“We manage the physical Server on which your Data is stored and I deploy to the Apple Appstore and Google Play Store”"
            tools={
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
            }
            changeSection={() => {
                setSelectedSection(5);
            }}
        />
    );
}
