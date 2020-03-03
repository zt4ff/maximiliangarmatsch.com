import React from 'react';
import { Box } from '../../components/Base/Base';
import TextAdress from './TextAdress';
import PrivacyPolicy from './PrivacyPolicy';

export default function Impressum() {
    return (
        <Box lineHeight="1.3rem">
            <TextAdress />
            <PrivacyPolicy />
        </Box>
    );
}
