import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../../../components/Base/Base';

export default function TextLogoMobile() {
    return (
        <Box
            as={Link}
            to="/"
            css={`
                text-decoration: none;
            `}
            ml="25px"
        >
            <Box as="h1" color="green" fontSize="16px" fontWeight="400">
                Maximilian Garmatsch
            </Box>
        </Box>
    );
}
