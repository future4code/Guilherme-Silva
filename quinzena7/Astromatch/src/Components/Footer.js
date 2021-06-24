import React from 'react';
import styled from 'styled-components';

const FooterContent = styled.div`
color: black;
font-size: 10px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 4px;
position: absolute;
bottom: 0;
left: 48vw;
margin: 0 auto;
`


export default function Footer() {

    return (

        <FooterContent>
            <p>astromatch&copy;</p>
        </FooterContent>

    )
}