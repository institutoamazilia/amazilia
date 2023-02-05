import { Box, Typography } from "@mui/material";
import React from "react";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";

export default function Supporters() {
  return (
    <Box
      id="Apoiadores"
      sx={{ paddingLeft: "6rem", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      {/*------------- section 1 -------------*/}
      <Typography
        fontFamily="Fira Sans"
        fontSize="28px"
        sx={{ color: "#260441" }}
      >
        {data.title}
      </Typography>
      <Box style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        {data.images.map((item, index) => (
          <img key={uuidv4()} style={{ paddingRight: "6rem" }} src={item} />
        ))}
      </Box>
      {/*------------- section 2 ------------- */}

      <Typography
        fontFamily="Fira Sans"
        fontSize="28px"
        sx={{ color: "#260441" }}
        mt="6rem"
      >
        {data.title2}
      </Typography>
      <Box style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <img style={{ paddingRight: "6rem" }} src={data.images2} />
      </Box>
      {/* ------------- section 3 -------------*/}

      <Typography
        fontFamily="Fira Sans"
        fontSize="28px"
        sx={{ color: "#260441", paddingTop: "4rem" }}
      >
        {data.title}
      </Typography>
      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {data.images3.map((item, index) => (
          <Box key={uuidv4()} sx={{ diplay: "flex", textAlign: "center" }}>
            <img key={uuidv4()} src={item.img} />
            <Typography key={uuidv4()} fontFamily="Fira Sans" color="#522D6D">
              {item.title}
            </Typography>
            <Typography key={uuidv4()} fontFamily="Fira Sans" color="#B06C18">
              {item.responsibility}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
