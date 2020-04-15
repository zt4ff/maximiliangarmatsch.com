import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../components/Base/Base';
import CountSection from './components/CountSection';

const formatValues = {
    green: chunks => (
        <Text
            color="green"
            fontSize={{ _: '16px', lg: '24px' }}
            fontWeight="400"
        >
            {chunks} <br />
        </Text>
    ),
    linebreak: <br />,
    a: chunks => (
        <Text as="a" to="https://maximiliangarmatsch.com/intro" color="green">
            {chunks} <br />
        </Text>
    ),
    calendly: chunks => (
        <Text
            as="a"
            to="https://calendly.com/maximilian-garmatsch"
            color="green"
        >
            {chunks} <br />
        </Text>
    ),
};
export default function LetsGetStartedBody() {
    return (
        <div>
            <CountSection number="1">
                <FormattedMessage
                    defaultMessage="
                                    <green>Free introdution</green>
                                    1-on-1 meeting: {linebreak}
                                    <a>maximiliangarmatsch.com/intro</a>"
                    values={formatValues}
                />
            </CountSection>
            <CountSection number="2">
                <FormattedMessage
                    defaultMessage="
                                    <green>Pay-as-you-go consulting</green>
                                    Super easy booking:
                                    <calendly>calendly.com/maximilian-garmatsch</calendly>
                                    320€ per 4 hours, including
                                    PayPal purchase protection."
                    values={formatValues}
                />
            </CountSection>
            <CountSection number="3">
                <FormattedMessage
                    defaultMessage="
                                    <green>Individual Projects</green>
                                    Designed to fit your budget. {linebreak}
                                    Deployed in two-week durations.
                                    "
                    values={formatValues}
                />
            </CountSection>
        </div>
    );
}
