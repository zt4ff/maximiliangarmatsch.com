import React from 'react';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import BackgroundLayerDesktop from './components/BackgroundLayerDesktop';
import TextWelcome from './components/TextWelcome';
import PithDeckButtons from './components/PithDeckButtons';

export default function LandingPageDesktop() {
    return (
        <DeviceProvider>
            <BackgroundLayerDesktop>
                <Box
                    maxWidth={{ lg: '465px', xl: '465px', xxl: '800px' }}
                    position="absolute"
                    top="calc(50% + 45px)"
                    right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                    css={`
                        transform: translateY(calc(-50%));
                    `}
                    zIndex="5"
                >
                    <TextWelcome />
                    <PithDeckButtons />
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
