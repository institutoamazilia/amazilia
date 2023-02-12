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

  const apiKey = import.meta.env.VITE_SENDINBLUE_APIKEY;

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
          listIds: [4], //	newsLetter list
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
      <Box paddingLeft={"5%"} pt="10%">
        <img src={Logo} />
      </Box>
      <Box
        sx={{
          padding: { xs: "1rem", sm: "6rem" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "flex-start", md: "space-between" },
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
              flexDirection: { sx: "column", sm: "row" },
              gap: "2rem",
              alignItems: "baseline",
            }}
          >
            <TextField
              size="small"
              sx={{
                bgcolor: "white",
                borderRadius: "8px",
                width: { sx: "300px", sm: "400px" },
                mt: "1rem",
              }}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Seu e-mail"
            />
            <Button
              type="submit"
              sx={{ width: { xs: "100%", sm: "100%" } }}
              variant="contained"
            >
              assinar boletim
            </Button>
          </FormControl>
          {/* <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
            <Checkbox sx={{ color: "white" }} />
            <Typography>Concordo com a Política de Privacidade</Typography>
          </Box> */}
        </Box>

        <Box mt={{ xs: 5, sm: 0 }}>
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

        <Box mt={{ xs: 5, sm: 0 }}>
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
