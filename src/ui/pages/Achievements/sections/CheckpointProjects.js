import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';
import { FormatValuesContext } from '../../../../context/FormatValuesContext';

export default function CheckpointDevelopers() {
    let formatValue = useContext(FormatValuesContext);
    return (
        <IconCheckpoint
            size={{
                _: '120px',
                md: '120px',
                lg: '135px',
                xl: '145px',
                xxl: '145px',
            }}
        >
            <Text color="green" textAlign="center" lineHeight="14px">
                <FormattedMessage
                    defaultMessage="
                    <header>12</header>
                    <subheader>Projects</subheader>
                    <rest>Completed</rest>"
                    values={formatValue}
                />
            </Text>
        </IconCheckpoint>
    );
}