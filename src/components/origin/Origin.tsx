import { Grid } from '@mui/material';
import * as Layout from './Origin.styles';
import { MainTitle, BoxText, LeftSection, RightSection } from './data';

export default function Origin() {
	return (
		<Layout.mainContainer>
			<Layout.mainTitle>{MainTitle}</Layout.mainTitle>
			<Grid container spacing={6}>
				<Grid item lg={6} xs={12}>
					<Layout.sectionTitle>
						{LeftSection.title}
					</Layout.sectionTitle>
					<Layout.sectionText>{LeftSection.text1}</Layout.sectionText>
					<Layout.sectionText>{LeftSection.text2}</Layout.sectionText>
					<Layout.sectionText>
						{LeftSection.text3}
						<Layout.spanText>
							{LeftSection.highlight}
						</Layout.spanText>
					</Layout.sectionText>
					<Layout.sectionText>{LeftSection.text4}</Layout.sectionText>
				</Grid>
				<Grid item lg={6} xs={12}>
					<Layout.sectionTitle>
						{RightSection.title}
					</Layout.sectionTitle>
					<Layout.sectionText>
						<Layout.spanText>
							{RightSection.highlight}
						</Layout.spanText>
						{RightSection.text1}
					</Layout.sectionText>
					<Layout.sectionText>
						{RightSection.text2}
					</Layout.sectionText>
					<Layout.image src={RightSection.image}></Layout.image>
				</Grid>
			</Grid>
			<Layout.curiosity>{BoxText}</Layout.curiosity>
		</Layout.mainContainer>
	);
}
