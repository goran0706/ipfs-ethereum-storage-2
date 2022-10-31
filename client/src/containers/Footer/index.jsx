import License from '../../components/License';
import Socials from '../../components/Socials';
import styled from '@emotion/styled/macro';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    color: #fff;
    background-color: #168be8;
    box-shadow: 0px -2px 2px #cfcfcf;
    padding: 0 6rem;
    height: 6vh;
    min-height: 48px;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <License />
            <Socials />
        </StyledFooter>
    );
}
