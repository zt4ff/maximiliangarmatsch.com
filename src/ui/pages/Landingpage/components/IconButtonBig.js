import React from 'react';
import { Box } from '../../../components/Base/Base';

export default function IconButtonBig({ href, children }) {
    return (
        <Box
            as="div"
            width="100%"
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
            <a href={href}>{children}</a>
        </Box>
    );
}
