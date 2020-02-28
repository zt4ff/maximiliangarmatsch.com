import React from 'react';
import { Flex } from '../../components/Base/Base';
import ImageMaximilian from './ImageMaximilian';
import TextWelcome from './TextWelcome';

export default function Landingpage() {
    return (
        <Flex
            flexDirection={{ _: 'column', sm: 'column', lg: 'row' }}
            alignItems="center"
            mt={{
                _: '2rem',
                sm: '2rem',
                md: '10rem',
                lg: '4rem',
                xxl: '10rem',
            }}
        >
            <ImageMaximilian />
            <TextWelcome />
        </Flex>
    );
}
