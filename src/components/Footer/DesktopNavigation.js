import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Flex } from '../Base/Base';
import NavigationLink from './NavigationLink';

export default function DesktopNavigation() {
    let location = useLocation();

    return (
        <Flex as="footer" justifyContent="flex-end" bg="transparent">
            <Box as="nav" pr="7px">
                {location.pathname === '/' && (
                    <NavigationLink to="/impressum">Impressum</NavigationLink>
                )}
            </Box>
        </Flex>
    );
}
