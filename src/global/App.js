import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../helpers/error-boundary';
import LocaleProvider from '../helpers/locale-provider';
import Landingpage from '../pages/Landingpage/Landingpage';
import Impressum from '../pages/impressum/impressum';
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
