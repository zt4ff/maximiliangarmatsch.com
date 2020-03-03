import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import Footer from '../components/Footer/Footer';
import { Box } from '../components/Base/Base';

export default function DesktopTemplate({ children }) {
    let location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <Box as={Grid} container>
            {isHome && <Box as={Grid} item sm={2} />}
            <Box
                as={Grid}
                container
                item
                sm={isHome ? 10 : 12}
                ml={!isHome ? '3rem  !important' : '0'}
            >
                <Box as={Grid} item container>
                    <Header />
                </Box>
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
                    <Box
                        as={Grid}
                        item
                        container
                        sm={2}
                        justify="flex-end"
                        alignItems="center"
                        pr="3rem"
                    >
                        <PortfolioIcons />
                    </Box>
                </Box>
            </Box>
            <Box
                as={Grid}
                item
                container
                justify="flex-end"
                position="fixed"
                bottom="3rem"
                right="3rem"
            >
                <Box as={Grid} item sm={12}>
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}
