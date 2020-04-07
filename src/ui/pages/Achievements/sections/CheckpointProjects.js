import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';

export default function CheckpointDevelopers() {
    return (
        <IconCheckpoint size="120px">
            <Text color="green" textAlign="center" lineHeight="14px">
                <FormattedMessage
                    defaultMessage="<header>12</header> <subheader>Projects</subheader> <rest>Completed</rest>"
                    values={{
                        header: chunks => (
                            <Text
                                fontSize="22px"
                                fontWeight="bold"
                                lineHeight="18px"
                            >
                                {chunks} <br />
                            </Text>
                        ),
                        subheader: chunks => (
                            <Text
                                fontSize="20px"
                                fontWeight="bold"
                                lineHeight="16px"
                            >
                                {chunks} <br />
                            </Text>
                        ),
                        rest: chunks => (
                            <Text fontSize="14px" fontWeight="300">
                                {chunks} <br />
                            </Text>
                        ),
                    }}
                />
            </Text>
        </IconCheckpoint>
    );
}
