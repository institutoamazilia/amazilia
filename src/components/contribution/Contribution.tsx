import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import * as Layout from "./Contribution.styles";

export default function Contribution() {
  return (
    <Layout.section id="Contribution">
      <Layout.aside>
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
      </Layout.aside>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Layout.image src={data.onuImage} />
      </Box>
    </Layout.section>
  );
}
