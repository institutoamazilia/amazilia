import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import * as Layout from "./Contribution.styles";
import COLORS from "../layout/colors";

export default function Contribution() {
  return (
    <Layout.section id="Contribution">
      <Layout.aside>
        <Typography color={COLORS.primaryDark} variant="h3" fontWeight="600">
          {data.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: { xs: "100%", sm: "60%" } }}
          my="1.4rem"
          color={COLORS.Neutral.dark}
        >
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
