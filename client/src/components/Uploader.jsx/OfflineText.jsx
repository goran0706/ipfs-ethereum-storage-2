import styled from '@emotion/styled/macro';
import React from 'react';

const Text = styled.p`
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    font-weight: 400;
    letter-spacing: 0.1px;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 100%;
`;

export default function OfflineText({ text }) {
    return <Text>{text}</Text>;
}
