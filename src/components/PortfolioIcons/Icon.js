import React from 'react';
import { Box, Text } from '../Base/Base';

export default function Icon({ to, iconSrc, alt }) {
    return (
        <Text
            as="a"
            m={{ sm: '10px 20px', md: '0px' }}
            pb={{ md: '0px' }}
            href={to}
        >
            <Box
                as="img"
                width={{ sm: '30px', md: '40px' }}
                height={{ sm: '30px', md: '40px' }}
                src={iconSrc}
                alt={alt}
            />
        </Text>
    );
}
