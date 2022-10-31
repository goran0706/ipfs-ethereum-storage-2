import { TiInfo } from 'react-icons/ti';
import ReactTooltip from 'react-tooltip';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div`
	cursor: help;
`;

export default function IconInfo({ content, delayHide }) {
	return (
		<Wrapper>
			<TiInfo size='24' data-tip data-for='info' effect='solid' />
			<ReactTooltip id='info' type='warning' delayHide={delayHide}>
				{content}
			</ReactTooltip>
		</Wrapper>
	);
}
 