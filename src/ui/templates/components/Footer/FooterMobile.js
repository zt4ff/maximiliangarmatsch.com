import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLinkHome from '../Navigation/NavLinkHome';
import PortfolioIcons from '../../../components/PortfolioIcons/PortfolioIcons';
import { Box, Flex } from '../../../components/Base/Base';
import NavLink from '../Navigation/NavLink';

export default function FooterMobile() {
    let location = useLocation();

    return (
        <Box
            as="footer"
            position="fixed"
            left="0"
            bottom="0"
            width="100%"
            bg="#191919"
        >
            <Flex
                as="nav"
                justifyContent="space-between"
                p={{ _: '5px 40px', sm: '5px 40px', md: '20px 75px' }}
                alignItems="center"
            >
                {location.pathname !== '/' ? (
                    <NavLinkHome />
                ) : (
                    <NavLink to="/impressum">Impressum</NavLink>
                )}
                <PortfolioIcons />
            </Flex>
        </Box>
    );
}
