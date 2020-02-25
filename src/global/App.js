import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../helpers/error-boundary';
import LocaleProvider from '../helpers/locale-provider';
import LandingPage from '../pages/landing-page/landing-page';
import Impressum from '../pages/impressum/impressum';
import theme from '../config/theme';

export default function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route path="/impressum">
                            <Impressum />
                        </Route>
                    </Switch>
                </LocaleProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}
