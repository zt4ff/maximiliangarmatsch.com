import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import { Flex } from '../../components/Base/Base';
import ImageMaximilian from './ImageMaximilian';
import TextWelcome from './TextWelcome';

export default function Landingpage() {
    return (
        <MainTemplate>
            <Flex
                flexDirection={{ sm: 'column', md: 'row' }}
                alignItems="center"
                mt={{ lg: '4rem', xxl: '10rem' }}
            >
                <ImageMaximilian />
                <TextWelcome />
            </Flex>
        </MainTemplate>
    );
}
