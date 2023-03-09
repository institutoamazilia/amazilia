import * as Layout from './Transparency.style';
import bgImage from '../../assets/about/transparency-background.jpg';
import { Box, Grid } from '@mui/material';
import { mainText, Reports, Ethics, WhatWeDid } from './data';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Transparency() {
	return (
		<Box id='trasparency' sx={{ position: 'relative' }}>
			<Layout.image src={bgImage} />
			<Layout.mainContainer>
				<Grid container spacing={6}>
					<Grid item lg={6} xs={12}>
						<Layout.mainTitle>{mainText.title}</Layout.mainTitle>
						<Layout.mainText>{mainText.text}</Layout.mainText>
					</Grid>
					<Grid item lg={3} xs={12}>
						<Layout.sectionTitle>
							{Reports.title}
						</Layout.sectionTitle>
						<Layout.containerFile>
							<Layout.fileButton
								href={Reports.fileLink}
								startIcon={<PictureAsPdfIcon />}
							>
								{Reports.fileName}
							</Layout.fileButton>
						</Layout.containerFile>
					</Grid>
					<Grid item lg={3} xs={12}>
						<Layout.sectionTitle>
							{Ethics.title}
						</Layout.sectionTitle>
						<Layout.containerFile>
							<Layout.fileButton
								href={Ethics.fileLink1}
								startIcon={<PictureAsPdfIcon />}
							>
								{Ethics.fileName1}
							</Layout.fileButton>
							<Layout.fileButton
								href={Ethics.fileLink2}
								startIcon={<PictureAsPdfIcon />}
							>
								{Ethics.fileName2}
							</Layout.fileButton>
							<Layout.fileButton
								href={Ethics.fileLink3}
								startIcon={<PictureAsPdfIcon />}
							>
								{Ethics.fileName3}
							</Layout.fileButton>
						</Layout.containerFile>
					</Grid>
				</Grid>
				<Grid container spacing={4}>
					{WhatWeDid.map(data => {
						return (
							<Grid item lg={3} xs={12}>
								<Layout.containerWhatWeDid>
									<Layout.bottomNumber>
										{data.number}
									</Layout.bottomNumber>
									<Layout.location>
										{data.location}
									</Layout.location>
									<Layout.bottomText>
										{data.bottomText}
									</Layout.bottomText>
								</Layout.containerWhatWeDid>
							</Grid>
						);
					})}
				</Grid>
			</Layout.mainContainer>
		</Box>
	);
}
