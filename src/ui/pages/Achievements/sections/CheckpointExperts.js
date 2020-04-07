import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';

export default function CheckpointLines() {
    return (
        <IconCheckpoint size="110px">
            <Text color="green" textAlign="center" lineHeight="14px">
                <FormattedMessage
                    defaultMessage="<header>50+</header> <subheader>digital experts</subheader> <rest>in my network</rest>"
                    values={{
                        header: chunks => (
                            <Text
                                fontSize="18px"
                                fontWeight="bold"
                                lineHeight="18px"
                            >
                                {chunks} <br />
                            </Text>
                        ),
                        subheader: chunks => (
                            <Text
                                fontSize="16px"
                                fontWeight="bold"
                                lineHeight="16px"
                            >
                                {chunks} <br />
                            </Text>
                        ),
                        rest: chunks => (
                            <Text fontSize="12px" fontWeight="300">
                                {chunks} <br />
                            </Text>
                        ),
                    }}
                />
            </Text>
        </IconCheckpoint>
    );
}
