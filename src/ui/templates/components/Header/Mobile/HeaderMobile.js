import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { Flex } from '../../../../components/Base/Base';
import { SizeContext } from '../../../../../context/SizeContext';
import LinkText45min from '../../../../components/LinkText45min';
import TextLogoMobile from './TextLogoMobile';
import HeaderIcons from './HeaderIcons';

export default function HeaderMobile() {
    const isDesktop = useContext(SizeContext);
    return (
        <Flex
            as="header"
            width="100%"
            height={isDesktop ? '100px' : '60px'}
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
            bg={{ _: 'darkgrey' }}
            position="fixed"
            zIndex="10"
        >
            <TextLogoMobile />
            <Flex alignItems="center" mr={isDesktop ? '5%' : '25px'}>
                {isDesktop && (
                    <Box fontSize="20px" lineHeight="18px" mr="70px">
                        <LinkText45min />
                    </Box>
                )}
                <HeaderIcons />
            </Flex>
        </Flex>
    );
}
