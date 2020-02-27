import React from 'react';
import { Box } from '../../components/Base/Base';
import image from './Max.jpg';

export default function ImageMaximilian() {
    return (
        <Box
            as="img"
            width={{ _: '125px', sm: '125px', md: '180px', xxl: '236px' }}
            height={{ _: '125px', sm: '125px', md: '180px', xxl: '236px' }}
            m={{
                _: '2rem auto',
                sm: '2rem auto',
                lg: '0 3rem 0 0',
                xxl: '0 5rem 0 0',
            }}
            borderRadius="15px 15px 15px 0"
            css={`
                box-shadow: -7px 7px 4px rgba(0, 0, 0, 0.25);
            `}
            src={image}
            alt="Maximilian Garmatsch"
        />
    );
}
