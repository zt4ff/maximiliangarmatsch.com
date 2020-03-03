import React from 'react';
import { Box } from '../../components/Base/Base';
import TextAdress from './components/TextAdress';
import TextPrivacyPolicy from './components/TextPrivacyPolicy';

export default function Impressum() {
    return (
        <Box lineHeight="1.3rem">
            <TextAdress />
            <TextPrivacyPolicy />
        </Box>
    );
}
