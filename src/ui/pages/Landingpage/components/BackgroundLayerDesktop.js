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
            top={{ lg: '60px', xl: '70px', xxl: '100px' }}
            height={{
                lg: 'calc(100% - 60px)',
                xl: 'calc(100% - 70px)',
                xxl: 'calc(100% - 100px)',
            }}
            width="100%"
            zIndex={1}
        >
            <Box
                as="img"
                position="absolute"
                bottom="0"
                left={{ lg: '-50px', xl: '0px', xxl: '0px' }}
                maxHeight={{ lg: '600px', xl: '700px', xxl: '700px' }}
                src="/assets/MaxTransparent.png"
            />
            <ShadowLayer />

            {children}
        </Box>
    );
}
