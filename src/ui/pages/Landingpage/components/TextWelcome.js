import React from 'react';
import { Text } from '../../../components/Base/Base';

function TextWelcome() {
    return (
        <Text
            as="p"
            color="green"
            fontSize={{ md: '20px', xxl: '28px' }}
            lineHeight={{ _: '1.5rem', md: '20px', xxl: '36px' }}
            width={{ _: '80%', sm: '75%' }}
            m={{ sm: '15px auto', lg: '0' }}
            textAlign="justify"
        >
            I am a Senior Web Engineer based in Berlin, Germany. My team and I
            develop, design, test and deploy web and mobile applications for
            startups and businesses. For future collaboration contact me at:
            <br />
            <br />
            For future collaboration contact me at:
            <br />
            <br />
            <Text color="white">mail@maximiliangarmatsch.com</Text>
        </Text>
    );
}

export default TextWelcome;
