import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../helpers/ErrorBoundary';
import LocaleProvider from '../helpers/LocaleProvider';
import Landingpage from '../pages/Landingpage/Landingpage';
import Impressum from '../pages/impressum/Impressum';
import theme from '../config/theme';

export default function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <Switch>
                        <Route exact path="/">
                            <Landingpage />
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
