import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const data = {
  title: "Quais resultados já alcançamos?",
  subt: "Dados acumulados de 2020 a maio de 2022.",
  cards: [
    {
      title: "Impacto direto em",
      values: [
        {
          value: "170",
          title: "gestores sociais",
        },
        {
          value: "70",
          title: "OSCs participantes",
        }
      ]
    },
    {
      title: "Sedes das OSCs",
      values: [
        {
          value: "18",
          title: "Estados brasileiros",
        },
        {
          value: "113",
          title: "voluntários engajados",
        }
      ]
    }
  ],
}

export default function Results() {
  return (
    <>
    <Box id="results" sx={{ padding: "6rem"}}>
      <Box >
        <Typography fontFamily="Fira Sans" color="#522D6D" variant='h3'>{data.title}</Typography>
        <Typography fontFamily="Open Sans" color="#260441">{data.subt}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", marginTop: "3rem"}}>
          {data.cards.map((item, index) => (
            <Box sx={{ display: "flex", flexDirection: "column",  width: "100%"}}>
              <Typography color="#522D6D" fontFamily="Fira Sans">{item.title}</Typography>
              <Box sx={{ display: "flex", flexDirection: "row",  width: "90%", justifyContent: "space-between"}}>
                {item.values.map((i, key) => (
                  <Box sx={{ display: "flex", marginRight: "1rem", flexDirection: "column"}}>
                    <Typography color="#E08C27" fontFamily="Fira Sans" fontWeight="400" fontSize="96px" >{i.value}</Typography>
                    <Typography width= "70%" fontFamily="Fira Sans" fontSize="28px" color="#522D6D"> {i.title}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </>
  )
}
