import React from 'react';
import Media from 'react-media';
import styled, { createGlobalStyle, css } from 'styled-components';
import Header from '../components/header/header';
import { device } from '../config/device';
import PortfolioIcons from '../components/portfolio-icons/portfolio-icons';
import Footer from '../components/footer/footer';
import { Flex } from '../components/Base/Base';

export default function MainTemplate({ children }) {
    return (
        <StyledLayout>
            <Header />
            <Flex justifyContent="space-between">
                <Main>{children}</Main>
                <Media query={device.tablet}>
                    <PortfolioIcons />
                </Media>
            </Flex>
            <Footer />
            <AppStyle />
        </StyledLayout>
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

//todo make Box
const StyledLayout = styled.div`
    margin: 3rem auto;
    max-width: 1290px;
    padding: 5px 35px;
    @media ${device.tablet} {
        padding: 0 4rem;
    }
`;

//todo make Box
const Main = styled.div`
    width: 100%;
    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.laptop} {
        width: 70%;
    }
`;
