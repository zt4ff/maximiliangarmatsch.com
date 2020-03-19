import React from 'react';
import { Flex } from '../../../../components/Base/Base';
import TextLogoMobile from './TextLogoMobile';
import HeaderIcons from './HeaderIcons';

export default function HeaderMobile() {
    return (
        <Flex
            as="header"
            width="100%"
            height="60px"
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
            bg={{ _: 'darkgrey' }}
            position="fixed"
            zIndex="10"
            mb="5rem"
        >
            <TextLogoMobile />
            <HeaderIcons />
        </Flex>
    );
}
