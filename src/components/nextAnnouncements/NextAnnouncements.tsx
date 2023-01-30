import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import image from '../../assets/NextAnnouncements-image.png'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface INext {
    title: string,
    subt: string,
}

const data = {
    title: "Fique sabendo sobre próximos Editais de fortalecimento de OSCs",
    subt: "Insira seu e-mail para ser avisado quando abrirmos Editais",
}

const inputStyle = {
    backgroundColor: "white",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    borderRadius: "20px",
}
export default function NextAnnouncements() {
  return (
    <Box id="Próximos Editais" bgcolor="#F2A03D" sx={{display: "flex"}}>
        <Box sx={{paddingLeft :"6.5rem", maxWidth: "50%" , paddingTop : "2.5rem", paddingBottom: "1.9rem"}} >
            <Typography fontFamily="Fira Sans" variant='h3' color="#260441">{data.title}</Typography>
            <Typography my="1rem" fontFamily="Open Sans" color="#181D27">{data.subt}</Typography>

            <FormControl sx={{gap: "1rem"}}>
                <Box>
                    <TextField sx={{bgcolor: "white", borderRadius: "6px", color:"#160226"}}  id="name-basic" placeholder="Nome" variant="outlined" />
                    <TextField sx={{bgcolor: "white", borderRadius: "6px", marginLeft: "1rem",color:"#160226"}} id="name-basic" placeholder="E-mail" type="email" variant="outlined" />
                </Box>
                <TextField sx={{bgcolor: "white", borderRadius: "6px",color:"#160226"}} multiline rows={4} placeholder='Deixe sua mensagem'></TextField>
                <Button sx={{maxWidth:"75px", fontFamily:"Fira Sans"}} variant="contained">Enviar</Button>
            </FormControl>
        </Box>
        <Box sx={{position: "relative"}}>
            <Box sx={{position: "absolute", left: "-100px"}}> 
                <img style={{width:"790px"}} src={image} alt="proximos editais foto" />
            </Box>
        </Box>
    </Box>
  )
}
