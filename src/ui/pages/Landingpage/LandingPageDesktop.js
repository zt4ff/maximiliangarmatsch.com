import React from 'react';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import BackgroundLayerDesktop from './components/BackgroundLayerDesktop';
import TextWelcomeMobile from './components/TextWelcomeMobile';
import PicthDeckButtons from './components/PitchDeckButtons';

export default function LandingPageDesktop() {
    return (
        <DeviceProvider>
            <BackgroundLayerDesktop>
                <Box
                    maxWidth="800px"
                    position="absolute"
                    top="50%"
                    right="10%"
                    css={`
                        transform: translateY(-50%);
                    `}
                    zIndex="5"
                >
                    <TextWelcomeMobile />
                    <PicthDeckButtons />
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
