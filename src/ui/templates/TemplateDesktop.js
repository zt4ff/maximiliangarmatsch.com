import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import { Box } from '../components/Base/Base';
import HeaderMobile from './components/Header/Mobile/HeaderMobile';

export default function TemplateDesktop({ children }) {
    let location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <Box as={Grid} container>
            <Box as={Grid} container mb="10rem">
                <HeaderMobile />
            </Box>
            <Box as={Grid} item sm={1} md={2} />
            <Box as={Grid} item sm={11} md={10}>
                <Box
                    as={Grid}
                    mt={
                        isHome
                            ? { md: '5rem !important', xxl: '7rem !important' }
                            : '0'
                    }
                    item
                    container
                >
                    <Box as={Grid} item sm={10}>
                        <Box>{children}</Box>
                    </Box>
                    <Box as={Grid} item container sm={2}>
                        <PortfolioIcons />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
