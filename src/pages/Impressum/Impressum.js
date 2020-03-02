import React from 'react';
import { Box } from '../../components/Base/Base';
import TextAdress from './TextAdress';
import PrivacyPolicy from './PrivacyPolicy';

export default function Impressum() {
    return (
        <Box
            lineHeight="1.1rem"
            mt={{ _: '2rem', sm: '2rem', md: '5rem', lg: '0' }}
        >
            <TextAdress />
            <PrivacyPolicy />
        </Box>
    );
}
