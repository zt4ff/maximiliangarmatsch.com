import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from '../../../components/Base/Base';

export default function FooterMobile() {
    return (
        <Box
            as="footer"
            position="fixed"
            left="0"
            bottom="0"
            width="100%"
            height="40px"
            bg="#191919"
            fontSize="14px"
            lineHeight="18px"
            p="10px 0"
            textAlign="center"
            zIndex="10"
        >
            <Box
                as={Link}
                to="/45min"
                css={`
                    text-decoration: none;
                `}
            >
                <Text color="green">
                    <FormattedMessage defaultMessage="Free 45-Minute Consultation:" />
                    <br />
                </Text>
                <Text color="white">
                    <FormattedMessage defaultMessage="maximiliangarmatsch.com/45min" />
                    <br />
                </Text>
            </Box>
        </Box>
    );
}
