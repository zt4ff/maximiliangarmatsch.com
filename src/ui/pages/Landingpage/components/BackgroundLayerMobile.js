import React from 'react';
import { Box } from '../../../components/Base/Base';
import ShadowLayer from './ShadowLayer';

export default function BackgroundLayerMobile({ children }) {
    return (
        <Box
            css={`
                background: url('/assets/Glasses.png');
                background-size: cover;
            `}
            position="absolute"
            left="0"
            top="60px"
            height="calc(100% - 100px)"
            width="100%"
            zIndex={1}
        >
            <ShadowLayer />
            {children}
        </Box>
    );
}
