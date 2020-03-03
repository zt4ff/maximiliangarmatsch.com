import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Box } from '../components/Base/Base';

export default function MobileTemplate({ children }) {
    return (
        <>
            <Box
                as={Grid}
                container
                sm={12}
                position="relative"
                top="0"
                left="0"
            >
                <Header />
            </Box>
            <Box
                as={Grid}
                sm={12}
                container
                mt={{ sm: '0rem' }}
                p="20px"
                mb="4rem"
            >
                <Box>{children}</Box>
            </Box>
            <Box as={Grid} position="fixed" sm={12} bottom="0">
                <Footer />
            </Box>
        </>
    );
}
