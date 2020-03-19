import React from 'react';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import TextWelcomeMobile from './components/TextWelcomeMobile';
import PicthDeckButtons from './components/PitchDeckButtons';
import BackgroundLayerMobile from './components/BackgroundLayerMobile';

export default function LandingPageMobile() {
    return (
        <DeviceProvider>
            <BackgroundLayerMobile>
                <Box
                    zIndex={2}
                    p="0 25px"
                    textAlign="center"
                    position="relative"
                    top="50%"
                >
                    <TextWelcomeMobile />
                    <PicthDeckButtons />
                </Box>
            </BackgroundLayerMobile>
        </DeviceProvider>
    );
}
