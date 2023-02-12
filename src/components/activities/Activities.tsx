import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ActivitiesCards, IActivitiesCard } from "./data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
export default function Activities() {
  return (
    <Box
      id="O que fazemos"
      sx={{
        width: "100%",
        height: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-start", sm: "center" },
        paddingLeft: { xs: "2rem", sm: "6.5rem" },
        paddingRight: { xs: "2rem", sm: "6.5rem" },
        marginTop: { xs: "4rem", sm: "0" },
      }}
    >
      <Box>
        <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            marginTop={1}
            fontFamily="Fira Sans"
            color="#522D6D"
            gutterBottom
            variant="h3"
          >
            Transformando{" "}
            <span style={{ color: "#E15383" }}>boas intenções</span> <br />
            em <span style={{ color: "#E15383" }}>realidade de impacto</span>
          </Typography>
          <Typography
            color="#495456"
            lineHeight={"30px"}
            fontFamily="Open Sans"
            gutterBottom
          >
            {ActivitiesCards.subtitle1}
          </Typography>
          <Typography
            color="#495456"
            lineHeight={"30px"}
            fontFamily="Open Sans"
            gutterBottom
          >
            {ActivitiesCards.subtitle2}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          overflowX: { xs: "scroll", sm: "hidden" },
          width: "100%",
          height: 300,
          flexDirection: "row",
          display: "flex",
          alignItems: "start",
        }}
      >
        {ActivitiesCards.cards.map((item: IActivitiesCard, index) => (
          <Card
            key={uuidv4()}
            sx={{
              bgcolor: "#EBEBEB",
              minWidth: 233,
              width: 233,
              height: 233,
              marginRight: "1rem",
              marginTop: "2rem",
            }}
          >
            <CardContent key={uuidv4()}>
              <img key={uuidv4()} src={item.icon} alt={`icone ${item.title}`} />
              <Typography
                key={uuidv4()}
                mt="1rem"
                fontFamily="Fira Sans"
                color="#495456"
                variant="body1"
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
