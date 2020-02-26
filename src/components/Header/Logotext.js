import React from 'react';
import { Text } from '../Base/Base';

export default function Logotext() {
    return (
        <Text
            as="h1"
            textAlign={{ sm: 'center', md: 'left' }}
            fontWeight={{ sm: 'inherit', md: 'normal' }}
            fontSize={{ sm: '23px', md: '3rem' }}
            lineHeight={{ sm: '27px', md: '84px' }}
        >
            Maximilian Garmatsch
        </Text>
    );
}
