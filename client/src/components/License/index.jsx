import styled from '@emotion/styled/macro';

const Wrapper = styled.div`
	color: #fff;
`;

export default function License() {
	return (
		<Wrapper>
			<span>Creative Common</span>
			<span> &#x1f16d; </span>
			<span>{new Date().getFullYear()}</span>
		</Wrapper>
	);
}
