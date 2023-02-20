import Typography from "@mui/material/Typography";
import { dataHeader } from "./data";
import * as Layout from "../../components/header/Header.styles";
import COLORS from "../layout/colors";
export default function Header() {
  return (
    <Layout.pageContainer bgcolor="#522D6D">
      <Layout.grid>
        <Layout.titleContainer>
          <Typography
            zIndex={4}
            variant="h1"
            fontWeight="600"
            color={COLORS.white}
            gutterBottom
          >
            {dataHeader.title}
          </Typography>
          <Typography variant="body1" color={COLORS.white} gutterBottom>
            {dataHeader.subtitle}
          </Typography>
        </Layout.titleContainer>
        <Layout.image src={dataHeader.img} alt="foto equipe amazilia" />
      </Layout.grid>
    </Layout.pageContainer>
  );
}
