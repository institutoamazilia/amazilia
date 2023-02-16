import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../assets/NextAnnouncements-image.png";
import { data } from "./data";
import * as Layout from "../layout/pageStructure";
import { RelativePosition, TitleContainer } from "./NextAnnouncements.styles";
import Form from "./components/Form";

export default function NextAnnouncements() {
  return (
    <Layout.Section id="Próximos Editais" bgcolor="#F2A03D">
      <TitleContainer>
        <Typography fontFamily="Fira Sans" variant="h3" color="#260441">
          {data.title}
        </Typography>
        <Typography my="1rem" fontFamily="Open Sans" color="#181D27">
          {data.subt}
        </Typography>
        <Form />
      </TitleContainer>
      <Box>
        <RelativePosition>
          <img src={image} alt="proximos editais foto" />
        </RelativePosition>
      </Box>
    </Layout.Section>
  );
}
