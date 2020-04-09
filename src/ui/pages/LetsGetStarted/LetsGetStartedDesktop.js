import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box, Flex, Text } from '../../components/Base/Base';
import IconButtonBig from '../Landingpage/components/IconButtonBig';
import BackgroundLayerDesktop from '../Landingpage/components/BackgroundLayerDesktop';

export default function LetsGetStartedDesktop() {
    const formatValues = useContext(FormatValuesContext);

    return (
        <DeviceProvider>
            <BackgroundLayerDesktop>
                <Box
                    maxWidth={{ lg: '465px', xl: '500px', xxl: '600px' }}
                    width="100%"
                    height="80vh"
                    position="absolute"
                    top="50%"
                    right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                    css={`
                        transform: translateY(calc(-50%));
                        box-shadow: 3px 3px 12px rgba(13, 233, 154, 0.31);
                    `}
                    zIndex="5"
                    bg="#191919"
                    borderRadius="54px"
                    border="1px solid rgba(27, 25, 25, 0.5)"
                >
                    <Box p="0 40px">
                        <Text
                            as="h1"
                            fontWeight="bold"
                            color="green"
                            fontSize="38px"
                            lineHeight="48px"
                            mb="60px"
                        >
                            <FormattedMessage defaultMessage="Let's get started." />
                        </Text>
                        <Flex alignItems="top" mb="40px">
                            <Text
                                fontSize="48px"
                                lineHeight="48px"
                                mr="20px"
                                color="green"
                            >
                                1
                            </Text>
                            <Text
                                fontSize="20px"
                                lineHeight="26px"
                                fontWeight="300"
                            >
                                <FormattedMessage
                                    defaultMessage="
                                <green>Free introdution</green>
                                1-on-1 meeting: {linebreak}
                                <a>maximiliangarmatsch.com/intro</a>"
                                    values={formatValues}
                                />
                            </Text>
                        </Flex>
                        <Flex alignItems="top" mb="40px">
                            <Text
                                fontSize="48px"
                                lineHeight="48px"
                                mr="20px"
                                color="green"
                            >
                                2
                            </Text>
                            <Text
                                fontSize="20px"
                                lineHeight="26px"
                                fontWeight="300"
                            >
                                <FormattedMessage
                                    defaultMessage="
                                <green>Pay-as-you-go consulting</green>
                                Super easy booking: 
                                <calendly>calendly.com/maximilian-garmatsch</calendly>
                                320€ per 4 hours, including 
                                PayPal purchase protection."
                                    values={formatValues}
                                />
                            </Text>
                        </Flex>
                        <Flex alignItems="top" mb="40px">
                            <Text
                                fontSize="48px"
                                lineHeight="48px"
                                mr="20px"
                                color="green"
                            >
                                3
                            </Text>
                            <Text
                                fontSize="20px"
                                lineHeight="26px"
                                fontWeight="300"
                            >
                                <FormattedMessage
                                    defaultMessage="
                                <green>Individual Projects</green>
                                Designed to fit your budget. {linebreak}
                                Deployed in two-week durations.
                                "
                                    values={formatValues}
                                />
                            </Text>
                        </Flex>
                        <Box
                            width="calc(100% - 80px)"
                            height="50px"
                            position="absolute"
                            bottom="100px"
                        >
                            <IconButtonBig to="/intro">
                                <FormattedMessage defaultMessage="Schedule a meeting now" />
                            </IconButtonBig>
                        </Box>
                    </Box>
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
