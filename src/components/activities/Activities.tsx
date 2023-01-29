import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ActivitiesCards, ActivitiesTitle, IActivitiesCard } from './data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { IconButton } from '@mui/material';

export default function Activities() {
  return (
    <Box sx={{width: "100%", height: 700,display: "flex", flexDirection: "column", justifyContent: { xs: "flex-start", sm: "center"}, paddingLeft: { xs: "2rem", sm:"6.5rem"},  paddingRight: { xs: "2rem", sm:"6.5rem"}, marginTop:{ xs: "4rem", sm:"0"}}}>
         <Box >
            <Box sx={{ width: { xs: "100%", sm: "50%"}, }}>
                <Typography  fontFamily="Fira Sans" variant="h5" gutterBottom>{ActivitiesTitle}</Typography>
                <Typography color="#495456" lineHeight={"30px"} fontFamily="Open Sans" variant="h6" gutterBottom>{ActivitiesCards.subtitle1}</Typography>
                <Typography color="#495456" lineHeight={"30px"} fontFamily="Open Sans" variant="h6" gutterBottom>{ActivitiesCards.subtitle2}</Typography>

            </Box>
         </Box>
         <Box sx={{ overflow: {xs :"scroll", sm:"hidden"}, width: "100%", flexDirection: "row", display: "flex", alignItems:"start", justifyContent: { xs : "flex-start", sm:"space-between"}}}>
            <Box component="div" sx={{ width: 1000, display: "flex", flexDirection: "row"}}>
                {ActivitiesCards.cards.map((item: IActivitiesCard, index) => (
                    <Card sx={{ width: 233, height: 233, marginRight: "1rem", marginTop: "2rem" }}>
                        <CardActionArea>
                        <CardContent>
                            <img  src={item.icon} alt={`icone ${item.title}`} />
                            <Typography mt="1rem" fontFamily="Fira Sans" color="#495456" variant="body1"> {item.title}</Typography>
                        </CardContent>
                        </CardActionArea> 
                    </Card>
                ))}
            </Box>
         </Box>
        
    </Box>
  )
}
