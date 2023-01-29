import React from 'react'
import Box from '@mui/material/Box';
import hearderimage from '../../assets/hearder-background.png'
import Typography from '@mui/material/Typography';
import { dataHeader } from './data';
import Container from '@mui/material/Container';


export default function Header() {
  return (
    <Box bgcolor="#522D6D" sx={{width: "100%", height: 700, display: "flex", position: "relative", justifyContent: "space-between", paddingTop: { xs: '6rem', md: '8rem' }, flexDirection: { xs: 'column', md: 'row' }}}>
        <Box sx={{ gap: "1rem", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center",  maxWidth: {xs: "100%", sm: "50%"}, paddingLeft:"2rem", paddingRight:"2rem"}}>
            <Box sx={{ width: {xs: "100%", sm: "80%"}}}>
                <Typography  fontFamily="Fira Sans" color="white" variant="h3" gutterBottom>{dataHeader.title}</Typography>
                <Typography lineHeight={"30px"} fontFamily="Open Sans" color="white"  variant="h6" gutterBottom>{dataHeader.subtitle}</Typography>
            </Box>
         </Box>
        <Box sx={{justifyContent: "flex-end", position:"absolute", right: 0, bottom: {xs: "-58px", sm: "-89px"} }}>
            <img style={{ width: "100%", height: "100%", objectFit: "contain"}} src={dataHeader.img} alt="foto equipe amazilia"/>
        </Box>
    </Box>
  )
}
