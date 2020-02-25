import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/device';
import image from './Max.png';

function ImageMaximilian() {
    return <IMG src={image} alt="Maximilian Garmatsch" />;
}

const IMG = styled.img`
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

export default ImageMaximilian;
