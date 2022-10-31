import styled from '@emotion/styled/macro';

const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 5px;

    width: 48px;
    height: 48px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: inherit;
`;

export default function FavoriteFileImage(props) {
    return (
        <ImageWrapper>
            <Image alt='' {...props} />
        </ImageWrapper>
    );
}
