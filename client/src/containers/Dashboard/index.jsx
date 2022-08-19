import { FlexContainer } from '../../components/shared/FlexContainer';
import { GridContainer } from '../../components/shared/GridContainer';
import Favorites from '../../components/Favorites';
import Files from '../../components/Files';
import Folders from '../../components/Folders';
import Panel from '../../components/shared/Panel';
import Search from '../../components/Search';
import styled from '@emotion/styled/macro';

const DashboardWrapper = styled.main`
	${FlexContainer};
	background-color: #ebf0f4;
	gap: 1rem;
	height: 88vh;
	justify-content: flex-start;
	padding: 0 6rem;
`;

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<GridContainer padding='2rem 0'>
				<Panel>
					<Search />
				</Panel>
				<Panel>
					<Folders />
				</Panel>
				<Panel>
					<Favorites />
				</Panel>
				<Panel>
					<Files />
				</Panel>
			</GridContainer>
		</DashboardWrapper>
	);
};

export default Dashboard;
