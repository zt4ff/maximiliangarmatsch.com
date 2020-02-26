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
                ml={{ md: '1rem', lg: '5rem' }}
                mt={{ lg: '5rem' }}
                width={{ lg: '90%' }}
            >
                <ImageMaximilian />
                <TextWelcome />
            </Flex>
        </MainTemplate>
    );
}
