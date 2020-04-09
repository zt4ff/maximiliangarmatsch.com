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
                position={{ _: 'fixed', sm: 'fixed', md: 'absolute' }}
                bottom={{ _: '-35px', sm: '0px', md: '-5%' }}
                left={{ _: '-65px', sm: '-65px', md: '0' }}
                maxWidth={{ _: '500px', sm: '500px', md: 'inherit' }}
                width={{ md: '100vw' }}
                src="/assets/MaxTransparentMobile.png"
            />
            <ShadowLayer />
            {children}
        </Box>
    );
}
