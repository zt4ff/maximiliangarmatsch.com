import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Media from 'react-media';
import Landingpage from '../pages/Landingpage/Landingpage';
import Impressum from '../pages/Impressum/Impressum';
import theme from '../config/theme';
import DesktopTemplate from '../templates/DesktopTemplate';
import { device } from '../config/device';
import LocaleProvider from './LocaleProvider';
import ErrorBoundary from './ErrorBoundary';

export default function DeviceProvider({ children }) {
    return (
        <>
            <Media query={device.laptop}>
                <DesktopTemplate>{children}</DesktopTemplate>
            </Media>

            <Media query={device.tablet}>
                <DesktopTemplate>{children}</DesktopTemplate>
            </Media>
        </>
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
