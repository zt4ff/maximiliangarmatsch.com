import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { device } from '../../global/style/device';

function PortfolioIcons() {
    return (
        <Box>
            <Link href="https://github.com/maximiliangarmatsch">
                <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://www.linkedin.com/in/maximilian-garmatsch/">
                <FontAwesomeIcon icon={faLinkedin} />
            </Link>
        </Box>
    );
}

const Box = styled.div`
    display: flex;
    flex-direction: row;
    @media ${device.tablet} {
        flex-direction: column;
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
