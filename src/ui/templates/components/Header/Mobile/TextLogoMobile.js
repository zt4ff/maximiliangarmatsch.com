import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../../../components/Base/Base';
import { SizeContext } from '../../../../../context/SizeContext';

export default function TextLogoMobile() {
    const isDesktop = useContext(SizeContext);
    return (
        <Box
            as={Link}
            to="/"
            css={`
                text-decoration: none;
            `}
            ml={isDesktop ? '5%' : '25px'}
        >
            <Box
                as="h1"
                color="green"
                fontSize={isDesktop ? '40px' : '16px'}
                fontWeight="400"
            >
                Maximilian Garmatsch
            </Box>
        </Box>
    );
}
