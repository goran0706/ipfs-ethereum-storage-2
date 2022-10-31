import styled from '@emotion/styled/macro';

export const GridContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 350px 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem 1rem;
    grid-template-areas:
        '. .'
        '. .';
    justify-content: center;
    align-content: center;
    justify-items: start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: ${(props) => props.padding};
`;

export const GridItem = styled.div``;
