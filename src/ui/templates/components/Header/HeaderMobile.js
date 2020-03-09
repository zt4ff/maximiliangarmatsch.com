import React from 'react';
import { useLocation } from 'react-router-dom';
import Media from 'react-media';
import { Flex } from '../../../components/Base/Base';
import { device } from '../../../../config/device';
import NavLinkHome from '../Navigation/NavLinkHome';
import TextLogo from './TextLogo';

export default function HeaderMobile() {
    let location = useLocation();
    return (
        <Flex
            width="100%"
            height={{ md: '8rem' }}
            textAlign="center"
            alignItems="center"
            bg={{ _: 'darkgrey' }}
            position="fixed"
            zIndex="10"
            mb="5rem"
        >
            <header style={{ width: '100%' }}>
                <TextLogo />
                <Media query={device.tablet}>
                    {location.pathname === '/impressum' && <NavLinkHome />}
                </Media>
            </header>
        </Flex>
    );
}
