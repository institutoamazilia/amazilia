import * as Layout from './ContributionImpact.styles';
import * as Layout2 from '../Contribution.styles';
import { data } from '../data';
import { Subtitle, Images, BottomLink } from './data';
import { Box } from '@mui/material';

export default function ContributionImpact() {
	return (
		<Layout.mainSection id='Contribuicao'>
			<Layout.Title>{data.title}</Layout.Title>
			<Layout.sectionTop>
				<Layout.sectionSubtitle>
					<Layout.subtitle>{Subtitle.sub1}</Layout.subtitle>
					<Layout.subtitle>{Subtitle.sub2}</Layout.subtitle>
				</Layout.sectionSubtitle>
				<Layout.onuImage src={data.onuImage} />
			</Layout.sectionTop>
			<Layout.sectionImages>
				{Images.map((item, index) => (
					<Layout.boxImages>
						<Layout.outro>
							<img
								style={{
									marginRight: '2rem',
									marginTop: '2.313rem',
								}}
								src={item.image}
							/>
						</Layout.outro>
						<Layout.outro>
							<Layout.imagesInfo>{item.info}</Layout.imagesInfo>
						</Layout.outro>
					</Layout.boxImages>
				))}
			</Layout.sectionImages>
			<Box
				sx={{
					display: 'flex',
				}}
			></Box>
			<Layout.bottomLink href={BottomLink.link} target='_blank'>
				{BottomLink.text}
			</Layout.bottomLink>
		</Layout.mainSection>
	);
}
