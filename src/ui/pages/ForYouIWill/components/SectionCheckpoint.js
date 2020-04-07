import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function SectionCheckpoint({ children }) {
    return (
        <Box
            bg="#222"
            css={`
                box-shadow: 0px 0px 16px #000000;
            `}
            borderRadius="12px"
            p="20px 16px"
            fontSize="14px"
            lineHeight="16px"
            fontWeight="300"
            mt="15px"
        >
            {children}
        </Box>
    );
}
