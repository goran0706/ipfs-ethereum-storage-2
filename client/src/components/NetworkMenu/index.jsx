import { networks } from '../../constants/networks';
import DropdownMenu from '../DropdownMenu';
import NetworkList from './NetworkList';
import Paragraph from '../shared/Paragraph';
import styled from '@emotion/styled/macro';

const mainNetworks = Array.from(Object.values(networks.mainNetworks));
const testNetworks = Array.from(Object.values(networks.testNetworks));

const NetworkControlRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    gap: 1rem;
`;

export default function NetworkMenu() {
    return (
        <DropdownMenu btnContent='Networks'>
            <Paragraph>Switch Network</Paragraph>
            <NetworkControlRow>
                <NetworkList networks={mainNetworks} />
                <NetworkList networks={testNetworks} />
            </NetworkControlRow>
        </DropdownMenu>
    );
}
