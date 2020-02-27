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
            position={{ _: 'absolute', sm: 'absolute', lg: 'initial' }}
            top="0"
            left="0"
            width="100%"
            minHeight={{ lg: '150px' }}
            bg={{ _: 'darkgrey', sm: 'darkgrey', lg: 'transparent' }}
        >
            <header>
                <Logotext />
                <Media query={device.tablet}>
                    {location.pathname !== '/' && <BackToHome />}
                </Media>
            </header>
        </Box>
    );
}
