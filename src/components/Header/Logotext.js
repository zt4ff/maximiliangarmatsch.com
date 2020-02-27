import React from 'react';
import { Text } from '../Base/Base';

export default function Logotext() {
    return (
        <Text
            as="h1"
            textAlign={{ md: 'center', lg: 'left' }}
            fontWeight={{ md: 'inherit', lg: 'normal' }}
            fontSize={{ sm: '23px', md: '36px', lg: '48px', xxl: '72px' }}
            lineHeight={{ sm: '27px', md: '42px', lg: '56px', xxl: '84px' }}
        >
            Maximilian Garmatsch
        </Text>
    );
}
