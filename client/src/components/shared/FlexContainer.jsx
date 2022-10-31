import styled from '@emotion/styled/macro';

export const FlexContainer = styled.div`
    align-content: normal;
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    display: flex;
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};
    flex-wrap: nowrap;
    gap: ${(props) => props.gap};
    justify-content: center;
    min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
`;

export const FlexItem = styled.div`
    align-self: auto;
    display: block;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
    order: 0;
`;
