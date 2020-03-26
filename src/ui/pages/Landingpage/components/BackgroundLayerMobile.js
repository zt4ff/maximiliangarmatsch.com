import React from 'react';
import { Box } from '../../../components/Base/Base';
import ShadowLayer from './ShadowLayer';

export default function BackgroundLayerMobile({ children }) {
    return (
        <Box
            css={`
                background: url('/assets/Gradient.png');
                background-size: cover;
            `}
            position="absolute"
            left="0"
            top="60px"
            height="calc(100% - 120px)"
            width="100%"
            zIndex={1}
        >
            <Box
                as="img"
                position={{ sm: 'fixed', md: 'absolute' }}
                bottom={{ sm: '55px', md: '-40px' }}
                left={{ sm: '-65px', md: '0' }}
                maxWidth={{ sm: '500px', md: 'inherit' }}
                src="/assets/MaxTransparentMobile.png"
            />
            <ShadowLayer />
            {children}
        </Box>
    );
}
