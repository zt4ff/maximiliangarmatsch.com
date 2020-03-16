import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import NavLink from '../../../templates/components/Navigation/NavLink';

export default function TextWelcomeMobile() {
    return (
        <Text as="p" color="green" lineHeight="20px" textAlign="justify">
            <FormattedMessage defaultMessage="I am a Senior Web Engineer based in Berlin, Germany. " />
            <NavLink to="/myteam">
                <FormattedMessage defaultMessage="My team and I" />
            </NavLink>
            <FormattedMessage defaultMessage=" develop, design, test and deploy web and mobile applications." />
        </Text>
    );
}
