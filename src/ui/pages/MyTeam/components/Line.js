import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function Line({
    absolute,
    position,
    length,
    bottom,
    left,
    right,
    top,
    transform,
}) {
    return (
        <Box
            position={absolute ? 'absolute' : 'relative'}
            borderLeft={position === 'vertical' ? '2px dashed green' : 'none'}
            borderTop={position === 'horizontal' ? '2px dashed green' : 'none'}
            width={position === 'horizontal' ? length : '0px'}
            height={position === 'vertical' ? length : '0px'}
            bottom={bottom || 'auto'}
            left={left || 'auto'}
            right={right || 'auto'}
            top={top || 'auto'}
            style={{
                transform: { transform },
            }}
        />
    );
}
