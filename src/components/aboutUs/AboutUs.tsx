import { Grid } from '@mui/material';
import * as Layout from './AboutUs.styles';
import { AboutUsTitle, AboutUsChallenge, AboutUsMore } from './data';

export default function AboutUs() {
	return (
		<>
			<Layout.containerAboutUs>
				<Grid container spacing={6}>
					<Grid item sm={6} xs={12}>
						<Layout.mainTitle>{AboutUsTitle}</Layout.mainTitle>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Layout.challengeTitle>
							{AboutUsChallenge.title}
						</Layout.challengeTitle>
						<Layout.challengeText>
							{AboutUsChallenge.text1}
						</Layout.challengeText>
						<Layout.challengeText>
							{AboutUsChallenge.text2}
						</Layout.challengeText>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Layout.moreTitle>
							{AboutUsMore[0].title}
						</Layout.moreTitle>
						<Layout.moreText>
							{AboutUsMore[0].subtitle}
						</Layout.moreText>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Layout.moreTitle>
							{AboutUsMore[1].title}
						</Layout.moreTitle>
						<Layout.moreText>
							{AboutUsMore[1].subtitle}
						</Layout.moreText>
					</Grid>
				</Grid>
			</Layout.containerAboutUs>
		</>
	);
}
