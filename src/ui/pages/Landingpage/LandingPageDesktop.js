import React from 'react';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Flex } from '../../components/Base/Base';
import ImageMaximilian from './components/ImageMaximilian';
import TextWelcome from './components/TextWelcome';

export default function LandingPageDesktop() {
    return (
        <DeviceProvider>
            <Flex
                flexDirection={{ _: 'column', sm: 'column', md: 'row' }}
                alignItems="center"
            >
                <ImageMaximilian />
                <TextWelcome />
            </Flex>
        </DeviceProvider>
    );
}
