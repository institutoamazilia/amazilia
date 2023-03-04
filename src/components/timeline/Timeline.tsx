import * as Layout from './Timeline.styles';
import { MainTitle, TimelineInfo } from './data';

export default function Timeline() {
	return (
		<Layout.mainContainer>
			<Layout.mainTitle>{MainTitle}</Layout.mainTitle>
			{TimelineInfo.map(item => {
				return (
					<>
						<Layout.sectionTitle>{item.year}</Layout.sectionTitle>

						{item.marks.map(mark => {
							return (
								<Layout.sectionText>{mark}</Layout.sectionText>
							);
						})}
					</>
				);
			})}
		</Layout.mainContainer>
	);
}
