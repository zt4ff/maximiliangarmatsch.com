import React, { useContext } from 'react';
import IconProductManager from '../Icons/IconProductManager';
import SectionTemplate from '../components/SectionTemplate';
import { SectionContext } from '../../../../context/SectionContext';

export default function ProductManager() {
    const setSelectedSection = useContext(SectionContext);
    return (
        <SectionTemplate
            id="ProductManager"
            aligment="left"
            firstLine="center"
            icon={<IconProductManager />}
            headline={
                <>
                    <span>Product Manager</span>
                    <br />
                    <span>Team Lead</span>
                </>
            }
            quote="“My job is to understand the users needs, analyse workflows,
                    create a roadmap and lead the team to a successful product
                    launch.”"
            tools={
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
            }
            changeSection={() => {
                setSelectedSection(2);
            }}
        />
    );
}
