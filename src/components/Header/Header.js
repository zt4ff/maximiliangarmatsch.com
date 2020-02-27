import React from 'react';
import { useLocation } from 'react-router-dom';
import Media from 'react-media';
import { device } from '../../config/device';
import BackToHome from '../BackToHome/BackToHome';
import { Box } from '../Base/Base';
import Logotext from './Logotext';

export default function Header() {
    let location = useLocation();
    return (
        <Box
            position={{ sm: 'absolute', md: 'initial' }}
            top="0"
            left="0"
            width="100%"
            minHeight={{ md: '150px' }}
            bg={{ sm: 'darkgrey', md: 'transparent' }}
        >
            <header>
                <Logotext />
                <Media query={device.tablet}>
                    {location.pathname !== '/' && (
                        <BackToHome style={BackToHomeStyle} />
                    )}
                </Media>
            </header>
        </Box>
    );
}

const BackToHomeStyle = {
    position: 'absolute',
    top: '7.6rem',
    fontSize: '22px',
    marginLeft: '5px',
};
