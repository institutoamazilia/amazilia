import { Box, Typography } from "@mui/material";
import React from "react";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import COLORS from "../layout/colors";
import * as Layout from "./Supporters.styles";

export default function Supporters() {
  return (
    <Layout.section id="Apoiadores">
      {/*------------- section 1 -------------*/}
      <Typography variant="h3" fontWeight="600" color={COLORS.primaryDark}>
        {data.title}
      </Typography>
      <Layout.supportersContainer>
        {data.images.map((item, index) => (
          <Box key={uuidv4()}>
            <img
              key={uuidv4()}
              src={item}
              style={{ paddingTop: "1rem", objectFit: "contain" }}
            />
          </Box>
        ))}
      </Layout.supportersContainer>
      {/*------------- section 2 ------------- */}

      <Typography
        variant="h3"
        fontWeight="600"
        color={COLORS.primaryDark}
        mt="6rem"
      >
        {data.title2}
      </Typography>
      <Box style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <img style={{ paddingRight: "6rem" }} src={data.images2} />
      </Box>
      {/* ------------- section 3 -------------*/}

      <Typography
        variant="h3"
        fontWeight="600"
        color={COLORS.primaryDark}
        sx={{ paddingTop: "4rem", padding: { xs: "2rem" } }}
      >
        {data.title3}
      </Typography>
      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Layout.teamContainer>
          {data.images3.map((item, index) => (
            <Layout.teamItem key={uuidv4()}>
              <img key={uuidv4()} src={item.img} />
              <Typography key={uuidv4()} fontFamily="Fira Sans" color="#522D6D">
                {item.title}
              </Typography>
              <Typography key={uuidv4()} fontFamily="Fira Sans" color="#B06C18">
                {item.responsibility}
              </Typography>
            </Layout.teamItem>
          ))}
        </Layout.teamContainer>
      </Box>
    </Layout.section>
  );
}
