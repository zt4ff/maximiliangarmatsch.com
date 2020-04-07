import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';

export default function CheckpointYears() {
    return (
        <IconCheckpoint size="120px">
            <Text color="green" textAlign="center" lineHeight="12px">
                <FormattedMessage
                    defaultMessage="<header>14</header> <subheader>Years</subheader> <rest>of Software Development</rest>"
                    values={{
                        header: chunks => (
                            <Text
                                fontSize="26px"
                                fontWeight="bold"
                                lineHeight="28px"
                            >
                                {chunks} <br />
                            </Text>
                        ),
                        subheader: chunks => (
                            <Text
                                fontSize="18px"
                                fontWeight="bold"
                                lineHeight="24px"
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
