import React from 'react';
import { Box, Text } from '../../../components/Base/Base';

export default function Title({ text }) {
    return (
        <Box textAlign="center" width="100%" height="20px" mt="40px" mb="40px">
            <Text
                as="h1"
                textAlign="left"
                fontSize="38px"
                lineHeight="48px"
                color="green"
            >
                {text}
            </Text>
        </Box>
    );
}
