import React from 'react';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import TextWelcome from './components/TextWelcome';
import PithDeckButtons from './components/PithDeckButtons';
import BackgroundLayerMobile from './components/BackgroundLayerMobile';

export default function LandingPageMobile() {
    return (
        <DeviceProvider>
            <BackgroundLayerMobile>
                <Box
                    zIndex={2}
                    p="0"
                    textAlign="center"
                    position="absolute"
                    bottom="35px"
                    minHeigth="600px"
                    overflow="scroll"
                    maxWidth={{ _: '330px', sm: '330px', md: '500px' }}
                    width="100%"
                    left="50%"
                    css={`
                        transform: translateX(-50%);
                    `}
                >
                    <TextWelcome />
                    <PithDeckButtons />
                </Box>
            </BackgroundLayerMobile>
        </DeviceProvider>
    );
}
