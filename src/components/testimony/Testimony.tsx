import React from 'react'
import image from '../../assets/testimony-background.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';

import { data } from './data';


const BackgroundHead= { backgroundImage: 'url('+image+')'}

export default function Testimony() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.cards.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

  return (
    <Box style={BackgroundHead} sx={{ backgroundSize: 'cover',backgroundPosition: 'center', width: "100%", height:"100%", paddingBottom: "3rem"}}>
        <Typography sx={{ paddingLeft: { xs: "2rem", sm:"6.5rem", paddingTop: "3rem", paddingBottom: "2rem"}}} color="white" fontSize="40px" fontFamily="Fira Sans">{data.title}</Typography>
        <Box sx={{ display: "flex", width:"100%", justifyContent:"center", flexDirection:"column", alignItems : "center"}}>
            <Box >
                
                <Card sx={{ display: 'flex', width: 1000, padding: "2rem", overflow: "hidden"}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 168, height:168 }}
                        src={data.cards[activeStep].img}
                        alt="Perfil"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column',overflow: "hidden" }}>
                    <CardContent sx={{ flex: '1 0 auto', minHeight: 336, justifyContent:"space-evenly"}}>
                        <Typography fontFamily="Open Sans"  component="div" fontSize="16px">
                            {data.cards[activeStep].testimony}
                        </Typography>
                        <div>
                            <Typography color="#522D6D" variant="subtitle1"  component="div">
                                {data.cards[activeStep].name}
                            </Typography>
                            <Typography  color="#522D6D"  variant="subtitle1"  component="div">
                                {data.cards[activeStep].local}
                            </Typography>
                        </div>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 , overflow: "hidden"}}>
                        
                    </Box>
                    </Box>
                    
                </Card>
                
            </Box>
            <MobileStepper
                sx={{bgcolor: "transparent", color: "white", overflow: "hidden", gap: "5rem"}}
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    sx={{ border: "2px solid #fff", color: "white"}}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft sx={{color: "white"}} />
                    ) : (
                    <KeyboardArrowRight sx={{color: "white"}} />
                    )}
                </Button>
                }
                backButton={
                <Button 
                sx={{ border: "2px solid #fff", color: "white"}}
                size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight  sx={{color: "white"}} />
                    ) : (
                    <KeyboardArrowLeft sx={{color: "white"}} />
                    )}
                </Button>
                }
            />
        </Box>
        </Box>
  )
}
