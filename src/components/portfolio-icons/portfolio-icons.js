import React from 'react';
import styled from 'styled-components';
import { device } from '../../config/device';
import GitHub from './GitHub.png';
import LinkedIn from './LinkedIn.png';

function PortfolioIcons() {
    return (
        <Box>
            <Link href="https://github.com/maximiliangarmatsch">
                <Icon src={GitHub} alt="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/maximilian-garmatsch/">
                <Icon src={LinkedIn} alt="LinkedIn" />
            </Link>
        </Box>
    );
}
const Icon = styled.img`
    width: 30px;
    height: 30px;
    @media ${device.tablet} {
        width: 40px;
        height: 40px;
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: row;
    @media ${device.tablet} {
        height: 100%;
        flex-direction: column;
        position: relative;
        top: 3rem;
    }
    @media ${device.laptop} {
        top: 9rem;
    }
`;

const Link = styled.a`
    color: #ffffff;
    font-size: 30px;
    margin: 10px 20px;
    @media ${device.tablet} {
        font-size: 40px;
        padding-bottom: 20px;
        margin: 0px;
    }
`;

export default PortfolioIcons;
