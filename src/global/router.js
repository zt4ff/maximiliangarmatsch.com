import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from '../pages/landing-page/landing-page';
import Impressum from '../pages/impressum/impressum';
import { device } from '../global/style/device';

export default function Router() {
    return (
        <Box>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/impressum">
                    <Impressum />
                </Route>
            </Switch>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.laptop} {
        width: 70%;
    }
`;
