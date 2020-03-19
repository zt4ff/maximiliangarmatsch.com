import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../Base/Base';

export default function Icon({ to, iconSrc, alt, width, height, margin }) {
    return (
        <Box
            as={Link}
            m={margin || { _: '10px 20px', sm: '10px 20px', md: '0px' }}
            pb={{ md: '0px' }}
            width={width || 'auto'}
            height={height || 'auto'}
            to={to}
        >
            <Box as="img" width="100%" height="100%" src={iconSrc} alt={alt} />
        </Box>
    );
}
