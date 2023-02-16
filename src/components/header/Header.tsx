import React from "react";
import Box from "@mui/material/Box";
import hearderimage from "../../assets/hearder-background.png";
import Typography from "@mui/material/Typography";
import { dataHeader } from "./data";
import Container from "@mui/material/Container";
import { Section, Subtitle, Title } from "../layout/pageStructure";
import * as Layout from "../../components/header/Header.styles";
import COLORS from "../layout/colors";
export default function Header() {
  return (
    <Section id="Home" bgcolor="#522D6D">
      <Layout.titleContainer>
        <Layout.headerContainer>
          <Title
            sx={{ fontSize: { xs: "30px", sm: "40px" } }}
            color={COLORS.white}
            gutterBottom
          >
            {dataHeader.title}
          </Title>
          <Subtitle color={COLORS.white} gutterBottom>
            {dataHeader.subtitle}
          </Subtitle>
        </Layout.headerContainer>
      </Layout.titleContainer>
      <Box
        sx={{
          justifyContent: "flex-end",
          position: "absolute",
          right: 0,
          bottom: { xs: "-58px", sm: "-89px" },
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={dataHeader.img}
          alt="foto equipe amazilia"
        />
      </Box>
    </Section>
  );
}
