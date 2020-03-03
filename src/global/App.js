import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../helpers/ErrorBoundary';
import LocaleProvider from '../helpers/LocaleProvider';
import Landingpage from '../pages/Landingpage/Landingpage';
import Impressum from '../pages/Impressum/Impressum';
import theme from '../config/theme';
import DeviceProvider from '../helpers/DeviceProvider';

export default function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <DeviceProvider>
                        <Switch>
                            <Route exact path="/">
                                <Landingpage />
                            </Route>
                            <Route path="/impressum">
                                <Impressum />
                            </Route>
                        </Switch>
                    </DeviceProvider>
                    <AppStyle />
                </LocaleProvider>
            </ThemeProvider>
        </ErrorBoundary>
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
        margin: 0;
    }
`;
