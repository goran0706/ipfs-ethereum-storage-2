import { FlexContainer } from './FlexContainer';
import styled from '@emotion/styled/macro';

const StyledParagraph = styled(FlexContainer)`
    color: ${(props) => (props.color ? props.color : '#333')};
    flex: 1;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    font-style: normal;
    font-weight: 400;
    height: 100%;
    letter-spacing: 0.1px;
    line-height: 13px;
    overflow: hidden;
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;

export default function Paragraph({ onClick, color, textAlign, children }) {
    return <StyledParagraph as='p' children={children} color={color} onClick={onClick} textAlign={textAlign} />;
}
