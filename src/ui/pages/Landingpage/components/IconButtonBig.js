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
                max-width="250px"
                height="72px"
                css={`
                    box-shadow: 0px 0px 16px #0cd58c;
                `}
                fontSize="16px"
                lineHeight="20px"
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
