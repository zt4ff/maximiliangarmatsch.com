import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function ImageMaximilian() {
    return (
        <Box
            as="img"
            minWidth={{ _: '125px', sm: '125px', md: '180px', xxl: '236px' }}
            maxWidth={{ _: '125px', sm: '125px', md: '180px', xxl: '236px' }}
            height={{ _: '125px', sm: '125px', md: '180px', xxl: '236px' }}
            m={{
                _: '2rem auto',
                sm: '2rem auto',
                md: '0 3rem 0 0',
                xxl: '0 5rem 0 0',
            }}
            alignSelf="flex-start"
            borderRadius="15px 15px 15px 0"
            css={`
                box-shadow: -7px 7px 4px rgba(0, 0, 0, 0.25);
            `}
            src="/assets/Max.jpg"
            alt="Maximilian Garmatsch"
        />
    );
}
