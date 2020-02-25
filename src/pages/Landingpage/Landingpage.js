import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../../templates/main-template';
import { device } from '../../config/device';
import ImageMaximilian from './ImageMaximilian';
import TextWelcome from './TextWelcome';

function Landingpage() {
    return (
        <MainTemplate>
            <Box>
                <ImageMaximilian />
                <TextWelcome />
            </Box>
        </MainTemplate>
    );
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
        align-items: center;
        margin-left: 1rem;
    }
    @media ${device.laptop} {
        width: 70%;
        margin-left: 5rem;
        margin-top: 7rem;
    }
`;

export default Landingpage;
