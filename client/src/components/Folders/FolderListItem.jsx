import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import Paragraph from '../shared/Paragraph';
import styled from '@emotion/styled/macro';
import { useMemo } from 'react';

const FolderItem = styled.li`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background: #fff;
    border: 1px solid rgb(50 50 93 / 10%);
    border-radius: 5px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    gap: 1rem;
    height: 48px;
    justify-content: flex-start;
    line-height: 16px;
    transition: all 0.15s ease-in-out;
    width: 180px;

    &:hover {
        cursor: pointer;
        background-color: #168be8;
        transition: all 0.15s ease-in-out;

        a,
        p {
            color: #fff;
            transition: all 0.15s ease-in-out;
        }
    }
`;

const FolderLink = styled(Link)`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    color: #168be8;
    padding: 0 20px;
    width: 180px;
    height: 100%;
`;

export default function FolderListItem({ folder }) {
    const { pathname } = useLocation();

    const path = useMemo(() => `/${folder.toLowerCase()}`, [folder]);
    const icon = useMemo(() => {
        const _pathname = pathname.toLowerCase().slice(1);
        const _folder = folder.toLowerCase();
        return _pathname === _folder ? <AiFillFolderOpen size='48' /> : <AiFillFolder size='48' color='#d7dbdf' />;
    }, [pathname, folder]);

    return (
        <FolderItem>
            <FolderLink to={path}>
                {icon}
                <Paragraph>{folder}</Paragraph>
            </FolderLink>
        </FolderItem>
    );
}
