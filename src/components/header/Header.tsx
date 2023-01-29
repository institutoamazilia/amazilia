import React from 'react'
import Box from '@mui/material/Box';
import hearderimage from '../../assets/hearder-background.png'
import Typography from '@mui/material/Typography';
import { dataHeader } from './data';
import Container from '@mui/material/Container';


export default function Header() {
  return (
    <Box bgcolor="#522D6D" sx={{width: "100%", height: 700, display: "flex", position: "relative", justifyContent: "space-between", paddingTop: "8rem", flexDirection: { xs: 'column', md: 'row' }}}>
        <div style={{ gap: "1rem", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", maxWidth: "50%"}}>
            <Container style={{ width: "80%"}}>
                <Typography lineHeight={"60px"} fontFamily="Fira Sans" color="white" variant="h3" gutterBottom>{dataHeader.title}</Typography>
                <Typography lineHeight={"30px"} fontFamily="Open Sans" color="white"  variant="h6" gutterBottom>{dataHeader.subtitle}</Typography>
            </Container>
         </div>
        <div style={{justifyContent: "flex-end", position:"absolute", right: 0, bottom: "-89px"}}>
            <img style={{ width: "100%", height: "100%", objectFit: "contain"}} src={dataHeader.img} alt="foto equipe amazilia"/>
        </div>
    </Box>
  )
}
