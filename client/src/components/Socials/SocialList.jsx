import { useMemo } from 'react';
import SocialListItem from './SocialListItem';
import styled from '@emotion/styled/macro';

const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    gap: 1rem;
`;

export default function SocialLinkList({ socials }) {
    const items = useMemo(
        () =>
            socials.map((s) => {
                return <SocialListItem key={s.label} social={s} />;
            }),
        [socials]
    );

    return <SocialList>{items}</SocialList>;
}
