import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import { Flex, Text } from '../../components/Base/Base';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';

export default function LetsGetStartedDesktop() {
    const formatValues = useContext(FormatValuesContext);

    return (
        <DesktopStepsTemplate
            title={<FormattedMessage defaultMessage="Let's get started." />}
            to="/intro"
            ButtonText={
                <FormattedMessage defaultMessage="Schedule a meeting now" />
            }
            lastStep={true}
        >
            <Flex alignItems="top" mb="40px">
                <Text fontSize="48px" lineHeight="48px" mr="20px" color="green">
                    1
                </Text>
                <Text fontSize="20px" lineHeight="26px" fontWeight="300">
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
                <Text fontSize="48px" lineHeight="48px" mr="20px" color="green">
                    2
                </Text>
                <Text fontSize="20px" lineHeight="26px" fontWeight="300">
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
                <Text fontSize="48px" lineHeight="48px" mr="20px" color="green">
                    3
                </Text>
                <Text fontSize="20px" lineHeight="26px" fontWeight="300">
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
        </DesktopStepsTemplate>
    );
}
