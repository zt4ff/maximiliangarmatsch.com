import React from 'react';
import Grid from '@material-ui/core/Grid';
import PortfolioIcons from '../components/PortfolioIcons/PortfolioIcons';
import { Box } from '../components/Base/Base';
import Header from './components/Header/Header';

export default function TemplateDesktop({ children }) {
    return (
        <Box as={Grid} container>
            <Box as={Grid} container mb="10rem">
                <Header />
            </Box>
            <Box as={Grid} item sm={1} md={2} />
            <Box as={Grid} item sm={11} md={10}>
                <Box as={Grid} item container>
                    <Box as={Grid} item sm={10}>
                        {children}
                    </Box>
                    <Box as={Grid} item container sm={2}>
                        <PortfolioIcons />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
