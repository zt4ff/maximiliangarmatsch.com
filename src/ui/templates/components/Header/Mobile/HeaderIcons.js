import React, { useContext } from 'react';
import { Flex } from '../../../../components/Base/Base';
import Icon from '../../../../components/PortfolioIcons/Icon';
import { SizeContext } from '../../../../../context/SizeContext';

export default function HeaderIcons() {
    const isDesktop = useContext(SizeContext);
    return (
        <Flex alignItems="center">
            <Icon
                iconSrc="/assets/IconEmail.png"
                alt="Icon email"
                to="/45min"
                height={isDesktop ? '36px' : '26px'}
                margin={isDesktop ? '0 35px 0 0' : '0 15px 0 0'}
            />
            <Icon
                iconSrc="/assets/IconImpressum.png"
                alt="Icon impressum"
                to="/impressum"
                height={isDesktop ? '36px' : '26px'}
                margin={isDesktop ? '0 0 0 35px' : '0 0 0 25px'}
            />
        </Flex>
    );
}
