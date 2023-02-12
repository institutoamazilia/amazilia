import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
export default function Contribution() {
  return (
    <Box
      id="Contribution"
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        bgcolor: "#ECEDEE",
        paddingLeft: { xs: "1rem", sm: "6rem" },
        paddingTop: "2rem",
        paddingBottom: "2rem",
        gap: "4rem",
      }}
    >
      <Box>
        <Typography fontSize="28px" color="#522D6D" fontFamily="Fira Sans">
          {data.title}
        </Typography>
        <Typography sx={{ maxWidth: { xs: "100%", sm: "60%" } }} my="1.4rem">
          {data.subt}
        </Typography>
        <Box>
          {data.images.map((item, index) => (
            <img key={uuidv4()} style={{ marginRight: ".4rem" }} src={item} />
          ))}
        </Box>
      </Box>
      <Container>
        <img src={data.onuImage} />
      </Container>
    </Box>
  );
}
