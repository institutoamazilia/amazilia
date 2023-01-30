import React from 'react'
import { Box, Typography } from '@mui/material'
import { data } from './data'

export default function Contribution() {
  return (
    <Box id="Contribution" sx={{display: "flex", flexDirection: "row", bgcolor: "#ECEDEE", padding: "6rem", gap: "4rem"}}>
        <Box>
            <Typography fontSize="28px" color="#522D6D" fontFamily="Fira Sans">{data.title}</Typography>
            <Typography maxWidth="60%" my="1.4rem">{data.subt}</Typography>
            { data.images.map((item, index) => (
                <img style={{marginRight: "1.5rem"}} src={item} />
                
            ))}
        </Box>
        <Box>
            <img src={data.onuImage}/>
        </Box>
    </Box>
  )
}
