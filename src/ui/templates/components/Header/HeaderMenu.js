import React, { useContext } from 'react';
import { Flex, Text } from '../../../components/Base/Base';
import Icon from '../../../components/PortfolioIcons/Icon';
import { SizeContext } from '../../../../context/SizeContext';
import LinkTextMeeting from '../../../components/LinkTextMeeting';

export default function HeaderMenu() {
    const isDesktop = useContext(SizeContext);

    return (
        <Flex alignItems="center">
            {isDesktop && (
                <Text
                    fontSize={{ lg: '14px', xl: '14px', xxl: '20px' }}
                    lineHeight="18px"
                    mr={{ lg: '50px', xl: '50px', xxl: '70px' }}
                >
                    <LinkTextMeeting />
                </Text>
            )}
            <Icon
                iconSrc={
                    isDesktop
                        ? '/assets/IconLinkedInHeaderDesktop.svg'
                        : '/assets/IconLinkedInHeaderMobile.svg'
                }
                alt="Icon LinkedIn"
                href="https://www.linkedin.com/in/maximilian-garmatsch/"
                target="_blank"
                margin={{
                    _: '0 20px 0 0',
                    sm: '0 20px 0 0',
                    md: '0 40px 0 0',
                    lg: '0 50px 0 0',
                    xl: '0 50px 0 0',
                    xxl: '0 70px 0 0',
                }}
            />
            <Icon
                iconSrc={
                    isDesktop
                        ? '/assets/IconImpressumDesktop.svg'
                        : '/assets/IconImpressumMobile.svg'
                }
                alt="Icon impressum"
                to="/impressum"
                margin="0"
            />
        </Flex>
    );
}
