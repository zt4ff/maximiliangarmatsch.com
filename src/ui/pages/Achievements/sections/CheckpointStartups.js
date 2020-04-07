import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';

export default function CheckpointStartups() {
    return (
        <IconCheckpoint size="125px">
            <Text color="green" textAlign="center" lineHeight="12px">
                <FormattedMessage
                    defaultMessage="<header>4</header> <subheader>Startups</subheader> <rest>Co-Founded</rest>"
                    values={{
                        header: chunks => (
                            <Text
                                fontSize="22px"
                                fontWeight="bold"
                                lineHeight="26px"
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
