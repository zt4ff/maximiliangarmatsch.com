import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import LandingPage from '../pages/landing-page/landing-page';
import Impressum from '../pages/impressum/impressum';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import PortfolioIcons from '../components/portfolio-icons/portfolio-icons';
import { device } from '../global/style/device';

export default function App() {
    let location = useLocation();
    return (
        <MainDiv>
            <Header />
            <Box path={location.pathname}>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/impressum">
                        <Impressum />
                    </Route>
                </Switch>
                <Media query={device.tablet}>
                    <PortfolioIcons />
                </Media>
            </Box>
            <Footer />
        </MainDiv>
    );
}

const MainDiv = styled.div`
    margin: 3rem 4rem;
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => {
        if (props.path === '/') {
            return 'margin-top: 2rem;';
        }
    }}
    @media ${device.tablet} {
        ${props => {
            if (props.path === '/') {
                return 'margin-top: 10rem;';
            }
        }}
    }
`;
