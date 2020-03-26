import React, { useContext } from 'react';
import { Flex, Text } from '../../../components/Base/Base';
import { SizeContext } from '../../../../context/SizeContext';
import LinkText45min from '../../../components/LinkText45min';
import TextLogo from './TextLogo';
import HeaderIcons from './HeaderIcons';

export default function Header({ p }) {
    const isDesktop = useContext(SizeContext);
    return (
        <Flex
            as="header"
            height="100%"
            maxWidth="100%"
            p={p}
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
            bg="darkgrey"
        >
            <TextLogo />
            <Flex alignItems="center">
                {isDesktop && (
                    <Text
                        fontSize={{ lg: '14px', xl: '14px', xxl: '20px' }}
                        lineHeight="18px"
                        mr={{ lg: '50px', xl: '50px', xxl: '70px' }}
                    >
                        <LinkText45min />
                    </Text>
                )}
                <HeaderIcons />
            </Flex>
        </Flex>
    );
}
