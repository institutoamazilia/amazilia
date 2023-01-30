import { Box, Divider, IconButton } from '@mui/material'
import Button from '@mui/material/Button/Button'
import Checkbox from '@mui/material/Checkbox/Checkbox'
import FormControl from '@mui/material/FormControl/FormControl'
import TextField from '@mui/material/TextField/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import background from '../../assets/footer-background.png'
import Logo from '../../assets/logo.png'

const BackgroundFooter= { backgroundImage: 'url('+background+')'}

export default function Footer() {

  return (
    <Box id="footer" style={BackgroundFooter} sx={{objectFit: "contain"}}>
      <Box sx={{padding: "6rem", display: "flex", justifyContent: "space-between"}}>
        <Box>
          <Typography fontFamily="Fira Sans" variant='h5'color="#FBFBFB">Receba nosso Boletim Informativo</Typography>
          <Typography fontFamily="Open Sans" variant='body1'color="#FBFBFB">E fique por dentro de todas as novidades do Amazilia.</Typography>
          <FormControl sx={{ display : "flex", flexDirection: "row", gap: "2rem", alignItems: "baseline"}}>
            <TextField size='small'  sx={{ bgcolor: "white", borderRadius: "8px", width: 400, mt: "1rem"}} placeholder='Seu e-mail'/>
            <Button sx={{ height:"40px"}} variant='contained'>assinar boletim</Button>

          </FormControl>
          <Box sx={{ display: "flex", alignItems: "center", color: "white"}}>
            <Checkbox sx={{color: "white"}}/>
            <Typography>Concordo com a Política de Privacidade</Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontFamily="Fira Sans" color="white">Contribua com O amazilia</Typography>
          <Typography fontFamily="Open Sans" color="white">Banco Itaú (341) <br/>Agência: 0151<br/>Conta corrente: 14.773-3<br/>CNPJ: 37.389.697/0001-44<br/>PIX: 37389697000144</Typography>
        </Box>
        <div></div>
      </Box>
      
    </Box>
  )
}
