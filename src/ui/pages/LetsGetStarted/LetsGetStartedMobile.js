import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex, Text } from '../../components/Base/Base';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';

export default function LetsGetStartedMobile() {
    const formatValues = useContext(FormatValuesContext);

    return (
        <MobileStepsTemplate
            title={<FormattedMessage defaultMessage="Let's get started." />}
            to="/intro"
            ButtonText={
                <FormattedMessage defaultMessage="Schedule a meeting now" />
            }
            lastStep={true}
        >
            <Flex alignItems="top" mb="30px">
                <Text fontSize="38px" mr="15px" color="green">
                    1
                </Text>
                <Text fontSize="16px" lineHeight="20px" fontWeight="300">
                    <FormattedMessage
                        defaultMessage="
                                <green>Free introdution</green>
                                1-on-1 meeting: {linebreak}
                                <a>maximiliangarmatsch.com/intro</a>"
                        values={formatValues}
                    />
                </Text>
            </Flex>
            <Flex alignItems="top" mb="30px">
                <Text fontSize="38px" mr="15px" color="green">
                    2
                </Text>
                <Text fontSize="14px" lineHeight="20px" fontWeight="300">
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
            <Flex alignItems="top" mb="30px">
                <Text fontSize="38px" mr="15px" color="green">
                    3
                </Text>
                <Text fontSize="14px" lineHeight="20px" fontWeight="300">
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
        </MobileStepsTemplate>
    );
}
