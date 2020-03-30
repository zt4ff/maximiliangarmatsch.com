import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from './Base/Base';

export default function LinkText45min() {
    return (
        <Box
            as="a"
            href="https://calendly.com/maximilian-garmatsch/45min"
            target="_blank"
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
    );
}
