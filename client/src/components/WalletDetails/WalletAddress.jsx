import { shortenAddress } from '../../utils';
import styled from '@emotion/styled/macro';

const Address = styled.p`
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 13px;
    padding: 0 1rem;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default function WalletAddress({ account }) {
    return <Address>{shortenAddress(account)}</Address>;
}
