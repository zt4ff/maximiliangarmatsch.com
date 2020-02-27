import React from 'react';
import { Box, Text } from '../Base/Base';

export default function Icon({ to, iconSrc, alt }) {
    return (
        <Text
            as="a"
            m={{ sm: '10px 20px', md: '0px' }}
            pb={{ md: '0px' }}
            width={{ sm: '30px', lg: '32px', xxl: '50px' }}
            height={{ sm: '30px', lg: '32px', xxl: '50px' }}
            href={to}
        >
            <Box as="img" width="100%" height="100%" src={iconSrc} alt={alt} />
        </Text>
    );
}
