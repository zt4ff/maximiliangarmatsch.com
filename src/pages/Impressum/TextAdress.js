import React from 'react';
import { Text } from '../../components/Base/Base';
import { device } from '../../config/device';

export default function TextAdress() {
    return (
        <Text
            fontSize={{ md: '21px' }}
            maxWidth="80%"
            color="white"
            marginBottom="1.5rem"
            css={`
                @media ${device.tablet} {
                    max-width: 300px;
                }
            `}
        >
            Maximilian Garmatsch <br />
            Bornheimer Landstrasse 37 <br />
            60316 Frankfurt am Main <br />
            mail@maximiliangarmatsch.com
        </Text>
    );
}
