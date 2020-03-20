import React from 'react';
import { Box } from '../../../components/Base/Base';
import ShadowLayer from './ShadowLayer';

export default function BackgroundLayerDesktop({ children }) {
    return (
        <Box
            css={`
                background: url('/assets/Gradient.png');
                background-size: cover;
            `}
            position="absolute"
            left="0"
            top="100px"
            height="calc(100% - 100px)"
            width="100%"
            zIndex={1}
        >
            <Box
                as="img"
                position="absolute"
                bottom="0"
                left="0"
                maxHeight="700px"
                src="/assets/MaxTransparent.png"
            />
            <ShadowLayer />

            {children}
        </Box>
    );
}
