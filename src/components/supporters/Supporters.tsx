import { Box, Typography } from '@mui/material'
import React from 'react'
import { data } from './data'

export default function Supporters() {
  return (
    <Box id="Apoiadores" sx={{ paddingLeft: "6rem", paddingTop:"4rem", paddingBottom: "4rem"}}>
        {/*------------- section 1 -------------*/}
        <Typography fontFamily="Fira Sans" fontSize="28px" sx={{color:"#260441"}}>{data.title}</Typography>
        <Box style={{marginTop: "2rem", marginBottom: "2rem"}} >
            { data.images.map ((item, index) => (
                <img style={{ paddingRight: "6rem"}} src={item}/>
            ))}
        </Box>
        {/*------------- section 2 ------------- */}

        <Typography fontFamily="Fira Sans" fontSize="28px" sx={{color:"#260441"}} mt="6rem">{data.title2}</Typography>
        <Box style={{marginTop: "2rem", marginBottom: "2rem"}} >
            <img style={{ paddingRight: "6rem"}} src={data.images2}/>
        </Box>
        {/* ------------- section 3 -------------*/}

        <Typography fontFamily="Fira Sans" fontSize="28px"  sx={{color:"#260441", paddingTop:"4rem"}}>{data.title}</Typography>
        <Box sx={{marginTop: "2rem", marginBottom: "2rem", display: "flex", flexDirection:"row"}} >
            { data.images3.map ((item, index) => (
                <Box sx={{ diplay: "flex", textAlign: "center"}}>
                    <img src={item.img}/>
                    <Typography fontFamily="Fira Sans" color="#522D6D">{item.title}</Typography>
                    <Typography fontFamily="Fira Sans" color="#B06C18" >{item.responsibility}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
  )
}
