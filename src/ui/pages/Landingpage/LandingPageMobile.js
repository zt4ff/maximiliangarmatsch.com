import React from 'react';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import TextWelcome from './components/TextWelcome';
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
                    position="absolute"
                    bottom="50px"
                    maxWidth={{ sm: '330px', md: '500px' }}
                    width="100%"
                    left="50%"
                    css={`
                        transform: translateX(-50%);
                    `}
                >
                    <TextWelcome />
                    <PicthDeckButtons />
                </Box>
            </BackgroundLayerMobile>
        </DeviceProvider>
    );
}
