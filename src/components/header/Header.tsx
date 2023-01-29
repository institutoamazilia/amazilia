import React from 'react'
import Box from '@mui/material/Box';
import hearderimage from '../../assets/hearder-background.png'
import Typography from '@mui/material/Typography';
import { dataHeader } from './data';

export default function Header() {
  return (
    <Box bgcolor="#522D6D" sx={{width: "100%", height: "100vh", display: "flex", justifyContent: "space-between", paddingTop: "8rem"}}>
        <div style={{ gap: "1rem", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
            <div style={{ maxWidth: "70%", }}>
                <Typography lineHeight={"60px"} fontFamily="Fira Sans" color="white" variant="h3" gutterBottom>{dataHeader.title}</Typography>
                <Typography lineHeight={"30px"} fontFamily="Open Sans" color="white"  variant="h6" gutterBottom>{dataHeader.subtitle}</Typography>
            </div>
         </div>
        <div style={{justifyContent: "flex-end", marginTop: "2.3rem"}}>
            <img src={dataHeader.img} alt="foto equipe amazilia"/>
        </div>
    </Box>
  )
}
