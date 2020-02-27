import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import { Box } from '../../components/Base/Base';
import TextAdress from './TextAdress';
import PrivacyPolicy from './PrivacyPolicy';

export default function Impressum() {
    return (
        <MainTemplate>
            <Box lineHeight="1.1rem">
                <TextAdress />
                <PrivacyPolicy />
            </Box>
        </MainTemplate>
    );
}
