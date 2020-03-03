import React from 'react';
import { Text } from '../Base/Base';

export default function Logotext() {
    return (
        <Text
            as="h1"
            textAlign={{ _: 'center', sm: 'center', md: 'left' }}
            fontWeight={{ _: 'inherit', sm: 'inherit', md: 'normal' }}
            fontSize={{
                _: '23px',
                sm: '23px',
                md: '36px',
                lg: '48px',
                xxl: '72px',
            }}
            lineHeight={{
                _: '27px',
                sm: '42px',
                lg: '56px',
                xxl: '84px',
            }}
        >
            Maximilian Garmatsch
        </Text>
    );
}
