import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '../components/Base/Base';
import Header from './components/Header/Header';
import FooterMobile from './components/Footer/FooterMobile';

export default function TemplateMobile({ children }) {
    return (
        <>
            <Box as={Grid} container position="relative" top="0" left="0">
                <Header />
            </Box>
            <Box as={Grid} container mt={{ sm: '0rem' }} p="20px" mb="4rem">
                <Box>{children}</Box>
            </Box>
            <Box as={Grid} position="fixed" bottom="0">
                <FooterMobile />
            </Box>
        </>
    );
}
