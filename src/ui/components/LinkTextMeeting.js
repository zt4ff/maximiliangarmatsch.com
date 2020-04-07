import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Text } from './Base/Base';

export default function LinkTextMeeting() {
    return (
        <Box
            as="a"
            href="https://calendly.com/maximilian-garmatsch"
            target="_blank"
            fontSize="14px"
            lineHeight="15px"
            fontWeight="300"
            css={`
                text-decoration: none;
            `}
        >
            <Text color="green">
                <FormattedMessage defaultMessage="Schedule a meeting:" />
                <br />
            </Text>
            <Text color="white">
                <FormattedMessage defaultMessage="https://calendly.com/maximilian-garmatsch" />
                <br />
            </Text>
        </Box>
    );
}
