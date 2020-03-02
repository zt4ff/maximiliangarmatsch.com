import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header/Header';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import Footer from '../components/Footer/Footer';
import { Box } from '../components/Base/Base';

export default function DesktopTemplate({ children }) {
    return (
        <>
            <Box as={Grid} container>
                <Box as={Grid} item sm={1} xl={2} />
                <Box as={Grid} item sm={11} xl={10}>
                    <Header />
                </Box>
            </Box>
            <Box as={Grid} container mt={{ xl: '5rem', xxl: '7rem' }}>
                <Box as={Grid} item sm={1} xl={2} />
                <Box as={Grid} item sm={7} xl={7}>
                    <Box>{children}</Box>
                </Box>
                <Box
                    as={Grid}
                    item
                    container
                    sm={4}
                    xl={3}
                    justify="flex-end"
                    alignItems="center"
                    pr="3rem"
                >
                    <PortfolioIcons />
                </Box>
            </Box>
            <Box
                as={Grid}
                container
                justify="flex-end"
                position="fixed"
                bottom="3rem"
            >
                <Box as={Grid} item xs={12} pr="3rem">
                    <Footer />
                </Box>
            </Box>
        </>
    );
}
