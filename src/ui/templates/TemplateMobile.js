import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '../components/Base/Base';
import HeaderMobile from './components/Header/HeaderMobile';
import FooterMobile from './components/Footer/FooterMobile';

export default function TemplateMobile({ children }) {
    return (
        <>
            <Box
                as={Grid}
                container
                position="relative"
                top="0"
                left="0"
                mb="4rem"
            >
                <HeaderMobile />
            </Box>
            <Box as={Grid} container mt={{ sm: '0rem' }}>
                <Box width="100%">{children}</Box>
            </Box>
            <Box as={Grid} container>
                <FooterMobile />
            </Box>
        </>
    );
}
