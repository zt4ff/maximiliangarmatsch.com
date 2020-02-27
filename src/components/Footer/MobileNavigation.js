import React from 'react';
import { useLocation } from 'react-router-dom';
import BackToHome from '../BackToHome/BackToHome';
import PortfolioIcons from '../PortfolioIcons/PortfolioIcons';
import { Box, Flex } from '../Base/Base';
import NavigationLink from './NavigationLink';

export default function MobileNavigation() {
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
                p={{ sm: '5px 35px', md: '20px 75px' }}
                alignItems="center"
            >
                {location.pathname !== '/' ? (
                    <BackToHome />
                ) : (
                    <NavigationLink to="/impressum">Impressum</NavigationLink>
                )}
                <PortfolioIcons />
            </Flex>
        </Box>
    );
}
