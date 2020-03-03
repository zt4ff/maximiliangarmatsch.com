import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Flex } from '../../../components/Base/Base';
import NavLink from '../Navigation/NavLink';

export default function FooterDesktop() {
    let location = useLocation();

    return (
        <Flex as="footer" justifyContent="flex-end" bg="transparent">
            <Box as="nav" pr="7px">
                {location.pathname === '/' && (
                    <NavLink to="/impressum">Impressum</NavLink>
                )}
            </Box>
        </Flex>
    );
}
