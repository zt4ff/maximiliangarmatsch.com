import React from 'react';
import Media from 'react-media';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header/Header';
import { device } from '../config/device';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import Footer from '../components/Footer/Footer';
import { Box, Flex } from '../components/Base/Base';

export default function DesktopTemplate({ children }) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Header />
                <Flex justifyContent="space-between">
                    <Box width={{ md: '100%', lg: '80%' }}>{children}</Box>
                    <Media query={device.laptop}></Media>
                </Flex>
                <Footer />
            </Grid>
            <Grid item xs={2}>
                <PortfolioIcons />
            </Grid>
        </Grid>
    );
}
