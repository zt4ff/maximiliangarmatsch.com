import React from 'react';
import { Text } from '../../components/Base/Base';

export default function TextAdress() {
    return (
        <Text fontSize={{ xxl: '18px' }} color="white" marginBottom="1.5rem">
            Maximilian Garmatsch <br />
            Bornheimer Landstrasse 37 <br />
            60316 Frankfurt am Main <br />
            mail@maximiliangarmatsch.com
        </Text>
    );
}
