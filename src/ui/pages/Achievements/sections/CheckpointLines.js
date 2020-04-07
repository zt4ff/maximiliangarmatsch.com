import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';

export default function CheckpointLines() {
    return (
        <IconCheckpoint size="110px">
            <Text color="green" textAlign="center" lineHeight="12px">
                <FormattedMessage
                    defaultMessage="<header>100k+</header> <subheader>Lines</subheader> <rest>of code written</rest>"
                    values={{
                        header: chunks => (
                            <Text
                                fontSize="26px"
                                fontWeight="bold"
                                lineHeight="30px"
                            >
                                {chunks} <br />
                            </Text>
                        ),
                        subheader: chunks => (
                            <Text
                                fontSize="20px"
                                fontWeight="bold"
                                lineHeight="26px"
                            >
                                {chunks}
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
