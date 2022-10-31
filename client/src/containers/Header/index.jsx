import { FlexContainer } from '../../components/shared/FlexContainer';
import Logo from '../../components/Logo';
import Network from '../../components/NetworkMenu';
import styled from '@emotion/styled/macro';
import TransactionMenu from '../../components/TransactionMenu';
import WalletDetails from '../../components/WalletDetails';

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 350px auto;
    grid-template-rows: 0.3fr;
    grid-template-areas: '. .';
    grid-auto-columns: 1fr;
    gap: 1em 1em;
    justify-content: space-between;
    align-content: center;
    justify-items: start;
    align-items: center;
    color: #fff;
    background-color: #168be8;
    box-shadow: 0px 2px 2px #cfcfcf;
    padding: 0 6rem;
    height: 6vh;
    min-height: 56px;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <FlexContainer gap='1rem'>
                <TransactionMenu />
                <Network />
                <WalletDetails />
            </FlexContainer>
        </StyledHeader>
    );
}
