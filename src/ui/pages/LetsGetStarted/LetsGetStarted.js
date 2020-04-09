import React, { useContext } from 'react';
import { Text } from '../../components/Base/Base';
import { SizeContext } from '../../../context/SizeContext';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import LetsGetStartedDesktop from './LetsGetStartedDesktop';
import LetsGetStartedMobile from './LetsGetStartedMobile';

export default function LetsGetStarted() {
    let messageValues = {
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
            <Text
                as="a"
                to="https://maximiliangarmatsch.com/intro"
                color="green"
            >
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
    const isDesktop = useContext(SizeContext);
    return (
        <FormatValuesContext.Provider value={messageValues}>
            {isDesktop ? <LetsGetStartedDesktop /> : <LetsGetStartedMobile />}
        </FormatValuesContext.Provider>
    );
}
