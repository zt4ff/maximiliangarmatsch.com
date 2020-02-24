import React from 'react';
import styled from 'styled-components';
import { device } from '../../global/style/device';

function Impressum() {
    return (
        <Box>
            <TextAdress>
                {' '}
                Maximilian Garmatsch <br />
                Bornheimer Landstrasse 37 <br />
                60316 Frankfurt am Main <br />
                mail@maximiliangarmatsch.com
            </TextAdress>
            <PrivacyPolicy>
                <p>Privacy policy</p>
                <p>
                    Our privacy policy is available for download.
                    <br />
                    Disclaimer
                </p>
                <p>
                    The information provided in this website is for general
                    information purpose only. ESU-services Ltd. makes no
                    representation about the suitability, reliability,
                    availability, accuracy and completeness of the information
                    contained in the ESU-services website for any purpose.
                </p>
                <p>
                    All such information is provided without warranties of any
                    kind. ESU-services Ltd. expressly disclaims legal liability
                    for any direct, indirect, incidental and consequential
                    damages or any damages whatsoever.
                </p>
                <p>
                    ESU-services Ltd. makes no representations or warranties
                    about the contents of any information provided in a linked
                    site.
                    <br />
                    Copyright
                </p>
                <p>
                    All content provided on this website is copyrighted. Such
                    information may not be copied or distributed, in whole or in
                    part, without prior written consent of ESU-services (if not
                    agreed otherwise with the commissioner of the study). A
                    provision of files or information provided on this website
                    directly on other websites or other means of distribution,
                    even in altered forms, needs the written consent of
                    ESU-services Ltd. This includes explicitly all email
                    addresses shown on this page. Furthermore, the use of life
                    cycle inventory data published on this website is not
                    allowed for commercial use. If information of this website
                    is used, it has to cited in an appropriate manner stating at
                    least title, author and the companies name and link to the
                    webpage where it is available.
                </p>
                <p>
                    We explicitly keep the right to claim any expenses and costs
                    arising from not respecting our property and copyright
                    rights. <br />
                    Courtesy
                </p>
            </PrivacyPolicy>
        </Box>
    );
}
const Box = styled.div`
    max-width: 100%;
    line-height: 1.1rem;
    @media ${device.tablet} {
        max-width: 80%;
    }
`;
const TextAdress = styled.p`
    max-width: 80%;
    color: #ffffff;
    margin-bottom: 1.5rem;
    @media ${device.tablet} {
        max-width: 300px;
    }
`;
const PrivacyPolicy = styled.div`
    color: #0de99a;
`;
export default Impressum;
