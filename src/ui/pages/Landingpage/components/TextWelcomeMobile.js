import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import NavLink from '../../../templates/components/Navigation/NavLink';
import { SizeContext } from '../../../../context/SizeContext';

export default function TextWelcomeMobile() {
    const isDesktop = useContext(SizeContext);

    return (
        <Text
            as="p"
            color="green"
            lineHeight={isDesktop ? '48px' : '24px'}
            fontSize={isDesktop ? '40px' : '20px'}
            textAlign="justify"
        >
            <FormattedMessage defaultMessage="I am a Senior Web Engineer based in Berlin, Germany. " />
            <NavLink to="/myteam" fontSize={isDesktop ? '40px' : '20px'}>
                <FormattedMessage defaultMessage="My team and I" />
            </NavLink>
            <FormattedMessage defaultMessage=" develop, design, test and deploy web and mobile applications." />
        </Text>
    );
}
