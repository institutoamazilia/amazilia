import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import COLORS from '../../layout/colors';
import * as Layout from './Info.styles';

export default function Info() {
	return (
		<>
			<Box
				sx={{
					paddingLeft: 15,
					paddingRight: 15,
					paddingTop: 8,
				}}
			>
				<Grid container spacing={6}>
					<Grid item sm={6} xs={12}>
						<Typography
							variant='h1'
							fontWeight='bold'
							color={COLORS.primary}
						>
							Você conhece alguma OSC que nasceu do sonho de mudar
							uma realidade?
						</Typography>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Box>
							Essa organização enfrenta desafios ligados a gestão?
							Estudos realizados no Brasil apontam que
							organizações sociais pequenas e médias lutam para
							sobreviver dia a dia, elas nascem de uma intenção
							genuína mas não conseguem prosperar. O Instituto
							Amazilia surgiu do sonho de ajudar quem quer fazer a
							diferença no Brasil, apoiar as OSCs no
							aperfeiçoamento da sua gestão e no fortalecimento
							das competências de seus líderes.
						</Box>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Box>
							Nossa missão Transformar boas intenções em
							realidade, fortalecendo Organizações Sociais por
							meio do desenvolvimento de competências de gestão e
							do acolhimento de seus líderes para que possam gerar
							impacto efetivo e sustentável.
						</Box>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Box>
							Nossa visão Ser referência de excelência no suporte
							a organizações, coletivos e movimentos sociais que
							atuam em desenvolvimento social, educação, inclusão
							produtiva e artes & cultura.
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

// const section = styled(Box)(({ theme }) => ({
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     paddingLeft: "6rem",
//     paddingRight: "6rem",
//     paddingTop: "4rem",
//     paddingBottom: "4rem",

//     flexDirection: "column",
//     [theme.breakpoints.down("md")]: {
//       padding: "2rem",
//     },
//   }));
