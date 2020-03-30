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
                position="fixed"
                bottom="0"
                left={{ lg: '-80px', xl: '0px', xxl: '0px' }}
                maxHeight={{ lg: '90vh', xl: '90vh', xxl: '90vh' }}
                src="/assets/MaxTransparent.png"
            />
            <ShadowLayer />

            {children}
        </Box>
    );
}
