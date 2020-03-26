import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function IconButtonBig({ href, children }) {
    return (
        <Box
            as="a"
            href={href}
            target="_blank"
            css={`
                text-decoration: none;
            `}
        >
            <Box
                as="div"
                width="100%"
                minHeight="100%"
                css={`
                    box-shadow: 0px 0px 16px #000000;
                `}
                bg="#222"
                borderRadius="12px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="green"
            >
                {children}
            </Box>
        </Box>
    );
}
