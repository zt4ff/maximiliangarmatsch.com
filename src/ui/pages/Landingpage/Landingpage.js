import React from 'react';
import { Flex } from '../../components/Base/Base';
import ImageMaximilian from './components/ImageMaximilian';
import TextWelcome from './components/TextWelcome';

export default function Landingpage() {
    return (
        <Flex
            flexDirection={{ _: 'column', sm: 'column', md: 'row' }}
            alignItems="center"
        >
            <ImageMaximilian />
            <TextWelcome />
        </Flex>
    );
}
