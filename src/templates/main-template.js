import React from 'react';
import Media from 'react-media';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/header/header';
import { device } from '../config/device';
import PortfolioIcons from '../components/portfolio-icons/portfolio-icons';
import Footer from '../components/footer/footer';

export default function MainTemplate({ children }) {
    return (
        <StyledLayout>
            <Header />
            <Body>
                <Main>{children}</Main>
                <Media query={device.tablet}>
                    <PortfolioIcons />
                </Media>
            </Body>
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

const StyledLayout = styled.div`
    margin: 3rem auto;
    max-width: 1290px;
    padding: 5px 35px;
    @media ${device.tablet} {
        padding: 0 4rem;
    }
`;

const Body = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Main = styled.div`
    width: 100%;
    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.laptop} {
        width: 70%;
    }
`;
