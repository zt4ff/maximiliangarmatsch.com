import React from 'react';
import styled from 'styled-components';
import { device } from '../../global/style/device';
import image from './Max.png';
function LandingPage() {
    return (
        <Box>
            <ImageMaximilian src={image} alt="Maximilian Garmatsch" />
            <TextWelcome>
                I am a Senior Web Engineer based in Berlin, Germany. My team and
                I develop, design, test and deploy web and mobile applications
                for small and medium businesses.
                <br />
                <br />
                For future collaboration contact me at:
                <br />
                <br />
                <TextWelcomeEmail>
                    mail@maximiliangarmatsch.com
                </TextWelcomeEmail>
            </TextWelcome>
        </Box>
    );
}

const ImageMaximilian = styled.img`
    width: 125px;
    min-width: 125px;
    height: 125px;
    margin: 2rem auto;
    border-radius: 15px 15px 15px 0;
    box-shadow: -7px 7px 4px rgba(0, 0, 0, 0.25);
    @media ${device.tablet} {
        margin-top: 0;
        margin-right: 2rem;
        margin-bottom: 3rem;
    }
`;
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
const TextWelcome = styled.p`
    color: #0de99a;
    line-height: 1.5rem;
    text-align: justify;
`;
const TextWelcomeEmail = styled.span`
    color: #ffffff;
`;

export default LandingPage;
