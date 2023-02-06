import React, { useState } from "react";
import image from "../../assets/testimony-background.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MobileStepper from "@mui/material/MobileStepper";
import Button, { ButtonProps } from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

import { data } from "./data";
import styled from "@mui/material/styles/styled";

const BackgroundHead = { backgroundImage: "url(" + image + ")" };

export default function Testimony() {
  const theme = useTheme();
  const maxSteps = data.cards.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  let value = 0;
  const maxValue = data.cards.length;
  value = value > maxValue ? maxValue : value;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(5, prevIndex + 1));
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => Math.max(1, prevIndex - 1));
  };

  return (
    <Box
      id="testimony"
      style={BackgroundHead}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        paddingBottom: "3rem",
      }}
    >
      <Typography
        sx={{
          paddingLeft: {
            xs: "2rem",
            sm: "6.5rem",
            paddingTop: "3rem",
            paddingBottom: "2rem",
          },
        }}
        color="white"
        fontSize="40px"
        fontFamily="Fira Sans"
      >
        {data.title}
      </Typography>
      {/* -------------- container ------------------ */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            transform: `translate3d(${-(currentIndex - 1) * 50}%, 0, 0)`,
            marginLeft: "6rem",
            transition: "transform 0.5s ease",
          }}
        >
          {data.cards.map((item, index) => (
            <Card
              id={`${index}`}
              sx={{
                display: "flex",
                minWidth: 800,
                padding: "2rem",
                marginRight: "6em",
                borderRadius: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 168, height: 168 }}
                src={item.img}
                alt="Perfil"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontFamily="Open Sans"
                    component="div"
                    fontSize="14px"
                  >
                    {item.testimony}
                  </Typography>
                  <div>
                    <Typography
                      color="#522D6D"
                      variant="subtitle1"
                      component="div"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      color="#522D6D"
                      variant="subtitle1"
                      component="div"
                    >
                      {item.local}
                    </Typography>
                  </div>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* parte de control */}
      <Box display="flex" justifyContent="space-between" width="80%" mt={2}>
        <div></div>
        <Typography color="white">{currentIndex}/5</Typography>
        <Box>
          <Button
            variant="outlined"
            sx={{
              border: "2px solid white",
              margin: 1,
              padding: "3px",
              borderRadius: "50%",
              minWidth: "10px",
            }}
            onClick={handleBack}
          >
            <KeyboardArrowLeft sx={{ color: "white" }} />
          </Button>

          <Button
            variant="outlined"
            sx={{
              border: "2px solid white",
              padding: "3px",
              borderRadius: "50%",
              minWidth: "10px",
            }}
            onClick={handleNext}
          >
            <KeyboardArrowRight sx={{ color: "white" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
