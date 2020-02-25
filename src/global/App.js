import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import PortfolioIcons from '../components/portfolio-icons/portfolio-icons';
import { device } from '../global/style/device';
import Router from './router';

export default function App() {
    return (
        <Box>
            <Header />
            <Main>
                <Router />
                <Media query={device.tablet}>
                    <PortfolioIcons />
                </Media>
            </Main>
            <Footer />
        </Box>
    );
}

const Box = styled.div`
    margin: 3rem auto;
    max-width: 1290px;
    padding: 5px 35px;
    @media ${device.tablet} {
        padding: 0 4rem;
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: space-between;
`;
