import React from 'react';
import { Text } from '../Base/Base';

export default function Logotext() {
    return (
        <Text
            as="h1"
            textAlign={{ _: 'center', sm: 'center', lg: 'left' }}
            fontWeight={{ _: 'inherit', sm: 'inherit', lg: 'normal' }}
            fontSize={{
                _: '23px',
                sm: '23px',
                md: '36px',
                lg: '48px',
                xxl: '72px',
            }}
            lineHeight={{
                _: '27px',
                sm: '27px',
                md: '42px',
                lg: '56px',
                xxl: '84px',
            }}
        >
            Maximilian Garmatsch
        </Text>
    );
}
