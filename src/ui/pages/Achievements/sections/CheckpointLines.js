import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';
import { FormatValuesContext } from '../../../../context/FormatValuesContext';

export default function CheckpointLines() {
    let formatValue = useContext(FormatValuesContext);
    return (
        <IconCheckpoint
            size={{
                _: '110px',
                md: '110px',
                lg: '120px',
                xl: '130px',
                xxl: '130px',
            }}
        >
            <Text
                color="green"
                textAlign="center"
                lineHeight="12px"
                p="5px"
                width="100px"
            >
                <FormattedMessage
                    defaultMessage="
                    <header>100k+</header>
                    <subheader>Lines</subheader>
                    <rest>of code written</rest>"
                    values={formatValue}
                />
            </Text>
        </IconCheckpoint>
    );
}
