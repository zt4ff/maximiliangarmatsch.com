import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box } from '../Base/Base';

export default function Icon({
    to,
    iconSrc,
    alt,
    width,
    height,
    margin,
    target,
}) {
    return (
        <Flex
            as={Link}
            target={target}
            m={margin || { _: '10px 20px', sm: '10px 20px', md: '0px' }}
            pb={{ md: '0px' }}
            width={width || 'auto'}
            height={height || 'auto'}
            to={to}
        >
            <Box as="img" width="100%" height="100%" src={iconSrc} alt={alt} />
        </Flex>
    );
}
