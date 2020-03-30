import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import NavLink from '../../../components/Navigation/NavLink';

export default function TextWelcome() {
    const fontSizeText = {
        _: '20px',
        sm: '20px',
        md: '30px',
        lg: '28px',
        xl: '28px',
        xxl: '40px',
    };
    return (
        <Text
            as="p"
            color="green"
            lineHeight={{
                _: '24px',
                sm: '24px',
                md: '30px',
                lg: '25px',
                xl: '25px',
                xxl: '48px',
            }}
            fontSize={fontSizeText}
            textAlign={{
                _: 'left',
                sm: 'left',
                md: 'center',
                lg: 'left',
                xl: 'left',
                xxl: 'left',
            }}
            m={0}
            p={0}
        >
            <FormattedMessage defaultMessage="I am a Senior Web Engineer based in Berlin, Germany. " />
            <NavLink to="#" fontSize={fontSizeText}>
                <FormattedMessage defaultMessage="My team and I" />
            </NavLink>
            <FormattedMessage defaultMessage=" develop, design, test and deploy web and mobile applications." />
        </Text>
    );
}
