import React from 'react';
import { Text } from '../Base/Base';

export default function Logotext() {
    return (
        <Text
            as="h1"
            textAlign={{ sm: 'center', md: 'left' }}
            fontWeight={{ sm: 'inherit', md: 'normal' }}
            fontSize={{ sm: '23px', lg: '48px', xxl: '72px' }}
            lineHeight={{ sm: '27px', lg: '56px', xxl: '84px' }}
        >
            Maximilian Garmatsch
        </Text>
    );
}
