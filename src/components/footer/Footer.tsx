import { Box, Divider, IconButton } from "@mui/material";
import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControl from "@mui/material/FormControl/FormControl";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import background from "../../assets/footer-background.png";
import Logo from "../../assets/logo.png";

const BackgroundFooter = { backgroundImage: "url(" + background + ")" };

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const apiKey = process.env.SENDINBLUE_API_KEY;

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.sendinblue.com/v3/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [5], //	newsLetter list
        }),
      });

      if (response.ok) {
        setEmail("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box id="footer" style={BackgroundFooter} sx={{ objectFit: "contain" }}>
      <Box paddingLeft={"5%"} pt="2%">
        <img src={Logo} />
      </Box>
      <Box
        sx={{
          padding: "6rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography fontFamily="Fira Sans" variant="h5" color="#FBFBFB">
            Receba nosso Boletim Informativo
          </Typography>
          <Typography fontFamily="Open Sans" variant="body1" color="#FBFBFB">
            E fique por dentro de todas as novidades do Amazilia.
          </Typography>
          <FormControl
            component="form"
            id="sib-form"
            data-type="boletim"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              alignItems: "baseline",
            }}
          >
            <TextField
              size="small"
              sx={{
                bgcolor: "white",
                borderRadius: "8px",
                width: 400,
                mt: "1rem",
              }}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Seu e-mail"
            />
            <Button type="submit" sx={{ height: "40px" }} variant="contained">
              assinar boletim
            </Button>
          </FormControl>
          <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
            <Checkbox sx={{ color: "white" }} />
            <Typography>Concordo com a Política de Privacidade</Typography>
          </Box>
        </Box>

        <Box>
          <Typography fontFamily="Fira Sans" color="white">
            FALE CONOSCO
          </Typography>
          <Typography fontFamily="Open Sans" color="white">
            contato@amazilia.org.br
          </Typography>
          <Typography fontFamily="Open Sans" color="white">
            ouvidoria@amazilia.org.br
          </Typography>
        </Box>

        <Box>
          <Typography fontFamily="Fira Sans" color="white">
            Contribua com O amazilia
          </Typography>
          <Typography fontFamily="Open Sans" color="white">
            Banco Itaú (341) <br />
            Agência: 0151
            <br />
            Conta corrente: 14.773-3
            <br />
            CNPJ: 37.389.697/0001-44
            <br />
            PIX: 37389697000144
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
