import styled from '@emotion/styled/macro';

const SocialLink = styled.a`
	color: #fff;
`;

const SocialItem = styled.li`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	&:hover {
		cursor: pointer;
		background-color: #168be8;
		transition: all 0.15s ease-in-out;

		${SocialLink} {
			text-shadow: 0 0 1rem #fff;
			transition: all 0.15s ease-in-out;
		}
	}
`;

export default function SocialListItem({ social: { href, label } }) {
	return (
		<SocialItem>
			<SocialLink href={href} target='_blank' rel='noreferrer noopener'>
				{label}
			</SocialLink>
		</SocialItem>
	);
}
