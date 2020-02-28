import React from 'react';
import DesktopTemplate from '../../templates/DesktopTemplate';
import { Box } from '../../components/Base/Base';
import TextAdress from './TextAdress';
import PrivacyPolicy from './PrivacyPolicy';

export default function Impressum() {
    return (
        <DesktopTemplate>
            <Box
                lineHeight="1.1rem"
                mt={{ _: '2rem', sm: '2rem', md: '5rem', lg: '0' }}
            >
                <TextAdress />
                <PrivacyPolicy />
            </Box>
        </DesktopTemplate>
    );
}
