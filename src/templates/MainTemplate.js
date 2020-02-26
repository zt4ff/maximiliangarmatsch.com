import React from 'react';
import Media from 'react-media';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header/Header';
import { device } from '../config/device';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import Footer from '../components/Footer/Footer';
import { Box, Flex } from '../components/Base/Base';

export default function MainTemplate({ children }) {
    return (
        <Box
            m="3rem auto"
            maxWidth="1290px"
            p={{ sm: '5px 35px', md: '0 4rem' }}
        >
            <Header />
            <Flex justifyContent="space-between">
                <Box width={{ sm: '100%', md: '70%' }}>{children}</Box>
                <Media query={device.tablet}>
                    <PortfolioIcons />
                </Media>
            </Flex>
            <Footer />
            <AppStyle />
        </Box>
    );
}
const AppStyle = createGlobalStyle`
    html,
    body {
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 2rem;
        color: #ffffff;
        background: #222222;
    }
`;
