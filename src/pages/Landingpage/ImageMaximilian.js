import React from 'react';
import { Box } from '../../components/Base/Base';
import image from './Max.jpg';

export default function ImageMaximilian() {
    return (
        <Box
            as="img"
            width={{ sm: '125px', xl: '236px' }}
            height={{ sm: '125px', xl: '236px' }}
            m={{ sm: '2rem auto', md: '0 2rem 0 0' }}
            borderRadius="15px 15px 15px 0"
            css={`
                box-shadow: -7px 7px 4px rgba(0, 0, 0, 0.25);
            `}
            src={image}
            alt="Maximilian Garmatsch"
        />
    );
}
