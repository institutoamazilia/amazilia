import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../assets/NextAnnouncements-image.png";
import { data } from "./data";
import * as Layout from "../layout/pageStructure";
import { RelativePosition, TitleContainer } from "./NextAnnouncements.styles";
import Form from "./components/Form";

export default function NextAnnouncements() {
  return (
    <Layout.section id="Próximos Editais" bgcolor="#F2A03D">
      <TitleContainer>
        <Typography variant="h3" fontWeight="600" color="#260441">
          {data.title}
        </Typography>
        <Typography my="1rem" variant="body2" color="#181D27">
          {data.subt}
        </Typography>
        <Form />
      </TitleContainer>
      <Box>
        <Box sx={{ position: "relative" }}>
          <RelativePosition>
            <img
              style={{ position: "absolute", top: 0 }}
              src={image}
              alt="proximos editais foto"
            />
          </RelativePosition>
        </Box>
      </Box>
    </Layout.section>
  );
}
