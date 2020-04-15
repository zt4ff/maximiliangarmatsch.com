import React from 'react';
import DeviceProvider from '../../helpers/DeviceProvider';
import { Box, Text } from '../components/Base/Base';
import IconButtonBig from '../pages/Landingpage/components/IconButtonBig';

export default function MobileStepsTemplate({
    children,
    title,
    to,
    ButtonText,
    lastStep,
}) {
    return (
        <DeviceProvider>
            <Box
                position="absolute"
                maxWidth="400px"
                width="calc(100% - 40px)"
                height="calc(100vh - 120px)"
                left="50%"
                top="50%"
                p="0 20px"
                css={`
                    transform: translate(-50%, -50%);
                `}
            >
                <Box
                    textAlign="left"
                    width="100%"
                    height="40px"
                    mt="30px"
                    mb="20px"
                >
                    <Text
                        as="h1"
                        fontSize="28px"
                        lineHeight="28px"
                        color="green"
                    >
                        {title}
                    </Text>
                </Box>
                {children}
                <Box
                    m="0 20px"
                    width="calc(100% - 80px)"
                    height="50px"
                    position="absolute"
                    bottom="20px"
                >
                    <IconButtonBig to={to} newTab={lastStep}>
                        {ButtonText}
                    </IconButtonBig>
                </Box>
            </Box>
        </DeviceProvider>
    );
}
