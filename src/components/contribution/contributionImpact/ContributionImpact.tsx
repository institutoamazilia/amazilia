import * as Layout from './ContributionImpact.styles';
import * as Layout2 from '../Contribution.styles';
import { data } from '../data';
import { Subtitle, images } from './data';
import { Box } from '@mui/material';

export default function ContributionImpact() {
	return (
		<Layout.mainSection>
			<Layout.Title>{data.title}</Layout.Title>
			<Layout.sectionTop>
				<Layout.sectionSubtitle>
					<Layout.subtitle>{Subtitle.sub1}</Layout.subtitle>
					<Layout.subtitle>{Subtitle.sub2}</Layout.subtitle>
				</Layout.sectionSubtitle>
				<Layout.onuImage src={data.onuImage} />
			</Layout.sectionTop>
			<Box>
				{images.map((item, index) => (
					<img
						style={{ marginRight: '2rem', marginTop: '2.313rem' }}
						src={item}
					/>
				))}
			</Box>
		</Layout.mainSection>
	);
}
