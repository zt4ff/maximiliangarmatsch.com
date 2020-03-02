import React from 'react';
import { useLocation } from 'react-router-dom';
import Media from 'react-media';
import { device } from '../../config/device';
import BackToHome from '../BackToHome/BackToHome';
import { Flex } from '../Base/Base';
import Logotext from './Logotext';

export default function Header() {
    let location = useLocation();
    return (
        <Flex
            height={{ lg: '15rem' }}
            alignItems="center"
            bg={{ _: 'darkgrey', sm: 'darkgrey', lg: 'transparent' }}
        >
            <header>
                <Logotext />
                <Media query={device.tablet}>
                    {location.pathname !== '/' && <BackToHome />}
                </Media>
            </header>
        </Flex>
    );
}
