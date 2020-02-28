import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header/Header';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import Footer from '../components/Footer/Footer';
import { Box } from '../components/Base/Base';

export default function DesktopTemplate({ children }) {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Header />
                    <Box>{children}</Box>
                </Grid>
                <Grid item xs={2} Flex justifyContent="flex-end">
                    <PortfolioIcons />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} Flex justifyContent="flex-end">
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
}
