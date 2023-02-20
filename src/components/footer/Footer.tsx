import { Box, IconButton, Divider } from "@mui/material";
import background from "../../assets/footer-background.png";
import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Feedback from "../feedback/Feedback";
import FormControl from "@mui/material/FormControl/FormControl";
import Link from "@mui/material/Link";
import Logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import NorthIcon from "@mui/icons-material/North";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BackgroundFooter = { backgroundImage: "url(" + background + ")" };

export default function Footer() {
  const [email, setEmail] = useState("");

  const apiKey = import.meta.env.VITE_SENDINBLUE_APIKEY;
  const [checked, setChecked] = useState(false);
  const [severity, setSeverity] =
    useState<"success" | "warning" | "info" | "error">("success");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
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
      //   .then(() => {
      //     setOpen(true);
      //     setSeverity("success");
      //     setMsg("E-mail recebido! Obrigado por assinar nosso boletim.❤️");
      //   })
      //   .catch(() => {
      //     setOpen(true);
      //     setSeverity("error");
      //     setMsg(
      //       "Erro inesperado, por favor entre em contato com nosso suporte"
      //     );
      //   });

      if (response.ok) {
        setEmail("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        id="footer"
        style={BackgroundFooter}
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          paddingBottom: "6rem",
          pl: "6rem",
          pr: "6rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "2rem",
            paddingRight: "4rem",
          }}
        >
          <IconButton
            style={{
              border: "2px solid white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            href="#Home"
          >
            <NorthIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", md: "space-between" },
          }}
          pb="2rem"
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
                justifyContent: { sx: "space-between" },
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
                variant="contained"
                disabled={checked ? false : true}
              >
                assinar boletim
              </Button>
            </FormControl>

            <Box sx={{ display: "flex", alignItems: "end", color: "white" }}>
              <Checkbox
                style={{
                  color: "white",
                  margin: 0,
                  padding: 0,
                  marginTop: "1rem",
                }}
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Link
                color="white"
                underline="hover"
                href="https://drive.google.com/file/d/1l0Kka0BC4UIv2TLBbVpeIQZNzkFbxiRE/view?usp=sharing"
                target="_blank"
              >
                <Typography ml={1} variant="body1">
                  Concordo com a Política de Privacidade
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* <Box mt={{ xs: 5, sm: 0 }}>
            <Typography fontFamily="Fira Sans" color="white">
              FALE CONOSCO
            </Typography>
            <Typography fontFamily="Open Sans" color="white">
              contato@amazilia.org.br
            </Typography>
            <Typography fontFamily="Open Sans" color="white">
              ouvidoria@amazilia.org.br
            </Typography>
          </Box> */}

          <Box mt={{ xs: 5, sm: 0 }} pr="6rem">
            <Typography variant="button" fontFamily="Fira Sans" color="white">
              Contribua com O amazilia
            </Typography>
            <Typography fontFamily="Open Sans" color="white">
              Banco Itaú (341) <br />
              Agência: 0151 <br />
              Conta corrente: 14.773-3 <br />
              CNPJ: 37.389.697/0001-44 <br />
              PIX: 37389697000144 <br />
            </Typography>
          </Box>
        </Box>
        <Divider
          flexItem
          orientation="horizontal"
          color="#FBFBFB"
          sx={{ marginBottom: "2rem", marginTop: "2rem" }}
        />
        <Box maxWidth="70%" pb="6rem">
          <Typography variant="caption" color="#ECEDEE">
            A Associação Amazilia é isenta do recolhimento de ITCMD (Imposto
            sobre Transmissão “Causa Mortis” e Doação de Quaisquer Bens ou
            Direitos), nos termos do § 2º do artigo 6º da Lei 10.705/00, na
            redação da Lei 10.992/01, e do § 1º do art. 6º e do artigo 9º do
            Decreto 46.655/02, com validade até 30/01/2026.
          </Typography>
        </Box>
        <Divider
          flexItem
          orientation="horizontal"
          sx={{ marginBottom: "2rem", marginTop: "2rem" }}
          color="#FBFBFB"
        />
        <Box
          flexDirection="row"
          display="flex"
          width="100%"
          justifyContent="space-between"
        >
          <Box>
            <img src={Logo} />
          </Box>
          <Link
            color="white"
            underline="hover"
            href="https://drive.google.com/file/d/1l0Kka0BC4UIv2TLBbVpeIQZNzkFbxiRE/view?usp=sharing"
            target="_blank"
          >
            <Typography ml={1} variant="button">
              Política de Privacidade
            </Typography>
          </Link>
          <Link
            color="white"
            underline="hover"
            href="https://drive.google.com/file/d/1l0Kka0BC4UIv2TLBbVpeIQZNzkFbxiRE/view?usp=sharing"
            target="_blank"
          >
            <Typography ml={1} variant="button">
              Política de cookies
            </Typography>
          </Link>
          <Typography color="white">
            © 2021. Todos os direitos reservados.
          </Typography>
          <Box display="flex" gap="1rem" paddingLeft="2rem">
            <IconButton
              href="https://www.instagram.com/amazilia_instituto/"
              target="_blank"
              sx={{ border: "2px solid white", color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href=""
              target="_blank"
              sx={{ border: "2px solid white", color: "white" }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              href="https://br.linkedin.com/company/instituto-amazilia"
              target="_blank"
              sx={{ border: "2px solid white", color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Feedback
        key={uuidv4()}
        msg={msg}
        severity={severity}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
