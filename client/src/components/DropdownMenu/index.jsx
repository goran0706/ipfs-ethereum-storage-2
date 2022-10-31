import { useHover } from '../../hooks';
import styled from '@emotion/styled/macro';

const Dropdown = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    color: #333;
    background-color: transparent;
    border-radius: 5px;
    border: none;
    position: relative;
`;

const DropDownContent = styled.div`
    display: none;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    gap: 1rem;
    color: #333;
    background-color: #ebf0f4;
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 8%) 0px 3px 6px 0px,
        rgb(0 0 0 / 6%) 0px 0px 1px 0px inset;
    border-radius: 5px;
    border: none;
    padding: 1.5rem;
    position: absolute;
    top: 4rem;
    right: 0;
    z-index: 1;
    display: ${({ show }) => (show === true ? 'flex' : 'none')};
`;

const DropdownButton = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    color: ${({ color }) => color ?? '5px'};
    border-radius: ${({ borderRadius }) => borderRadius ?? '5px'};
    border: 1px solid transparent;
    outline: none;
    font-weight: 500;
    padding: ${({ padding }) => padding ?? '10px'};
    position: relative;
    text-decoration: none;
    width: ${({ width }) => width ?? '100%'};
    z-index: 1;
    will-change: transform;
    transition: all 0.15s ease-in-out;
    transform: perspective(1px) translateZ(0);

    &:hover {
        color: #fff;
        background-color: #168be8;
        transition: all 0.15s ease-in-out;
    }

    &:disabled {
        opacity: 50%;
        cursor: auto;
        pointer-events: none;
        color: #333;
        background-color: #fff;
    }

    > * {
        user-select: none;
    }

    > a {
        text-decoration: none;
    }
`;

export default function DropdownMenu({ btnContent, content, children }) {
    const [btnRef, btnHovered] = useHover(150);
    const [contentRef, contentHovered] = useHover(150);

    return (
        <Dropdown>
            <DropdownButton ref={btnRef} hovered={btnHovered}>
                {btnContent}
            </DropdownButton>
            <DropDownContent ref={contentRef} show={btnHovered || contentHovered}>
                {content || children}
            </DropDownContent>
        </Dropdown>
    );
}
