import React from 'react';
import { Flex } from '../../../../components/Base/Base';
import Icon from '../../../../components/PortfolioIcons/Icon';

export default function HeaderIcons() {
    return (
        <Flex alignItems="center" mr="25px">
            <Icon
                iconSrc="/assets/IconEmail.png"
                alt="Icon email"
                to="/45min"
                height="26px"
                margin="0 15px 0 0"
            />
            <Icon
                iconSrc="/assets/IconImpressum.png"
                alt="Icon impressum"
                to="/impressum"
                height="26px"
                margin="0 0 0 15px"
            />
        </Flex>
    );
}
