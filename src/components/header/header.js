import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Media from 'react-media';
import { device } from '../../global/style/device';
import BackToHome from '../back-to-home/back-to-home';

function Header() {
    let location = useLocation();
    return (
        <Box>
            <header>
                <Logotext>Maximilian Garmatsch</Logotext>
                <Media query={device.tablet}>
                    {location.pathname !== '/' && (
                        <BackToHome
                            style={BackToHomeStyle}
                            arrowStyle={BackToHomeArrowStyle}
                        />
                    )}
                </Media>
            </header>
        </Box>
    );
}

const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #191919;
    @media ${device.tablet} {
        position: initial;
        background: transparent;
        min-height: 150px;
    }
`;

const Logotext = styled.h1`
    text-align: center;
    font-size: 23px;
    line-height: 27px;
    @media ${device.tablet} {
        text-align: left;
        font-weight: normal;
        font-size: 3rem;
        line-height: 84px;
    }
`;

const BackToHomeStyle = {
    position: 'relative',
    bottom: '3.5rem',
    fontSize: '0.9rem',
};

const BackToHomeArrowStyle = {
    marginRight: '3px',
};

export default Header;
