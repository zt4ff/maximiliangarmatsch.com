import React from 'react';
import { Box } from '../Base/Base';

export default function Icon({ to, iconSrc, alt }) {
    return (
        <Box
            as="a"
            m={{ _: '10px 20px', sm: '10px 20px', md: '0px' }}
            pb={{ md: '0px' }}
            width={{ _: '30px', sm: '30px', md: '32px', xxl: '50px' }}
            height={{ _: '30px', sm: '30px', md: '32px', xxl: '50px' }}
            href={to}
        >
            <Box as="img" width="100%" height="100%" src={iconSrc} alt={alt} />
        </Box>
    );
}
