import styled from '@emotion/styled/macro';

const StyledDiv = styled.div`
    align-self: stretch;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 8%) 0px 3px 6px 0px,
        rgb(0 0 0 / 6%) 0px 0px 1px 0px inset;
    overflow: auto;
    padding: 1rem;
    width: 100%;
`;

export default function Panel({ children }) {
    return <StyledDiv>{children}</StyledDiv>;
}
