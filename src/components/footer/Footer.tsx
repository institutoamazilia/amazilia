import { Box, IconButton, Divider } from "@mui/material";
import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Feedback from "../feedback/Feedback";
import FormControl from "@mui/material/FormControl/FormControl";
// import Link from "@mui/material/Link";
import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import NorthIcon from "@mui/icons-material/North";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as Layout from "./Footer.styles";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import COLORS from "../layout/colors";
import { Link } from "react-router-dom";
export default function Footer() {
  const [email, setEmail] = useState("");
  const apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY;
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

      if (response.ok) {
        setSeverity("success");
        setOpen(true);
        setMsg("E-mail recebido! Obrigado por assinar nosso boletim.??????");
      }

      const data = await response.json();
      if (data.code === "duplicate_parameter") {
        setSeverity("warning");
        setOpen(true);
        setMsg(
          "Este endere??o de e-mail j?? est?? cadastrado. Por favor, verifique e tente novamente.'"
        );
      }
    } catch (error: any) {
      if (error.code === "duplicate_parameter") {
        console.log(
          "Este endere??o de e-mail j?? est?? cadastrado. Por favor, verifique e tente novamente."
        ); // mensagem de erro amig??vel
      } else {
        console.error("Ocorreu um erro inesperado", error); // mensagem de erro para outros tipos de exce????o
      }
      setSeverity("error");
      setOpen(true);
      setMsg(
        "Desculpe-nos, algo n??o est?? funcionando corretamente. Por favor, tente novamente mais tarde ou entre em contato com o suporte."
      );
    }
  };

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setSeverity("success");
        setOpen(true);
        setMsg("Texto copiado com sucesso para a ??rea de transfer??ncia.");
      })
      .catch((error) => {
        console.error(
          "Erro ao copiar texto para a ??rea de transfer??ncia",
          error
        );
      });
    console.log(text);
  }
  return (
    <>
      <Layout.section id="footer">
        <Layout.floatingButton>
          <IconButton
            sx={{
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
        </Layout.floatingButton>
        <Layout.newsLetterContainer>
          <Layout.inputContainer>
            <Typography
              variant="h3"
              color={COLORS.Neutral.lightGrey3}
              fontWeight={600}
              mb=".5rem"
            >
              Receba nosso Boletim Informativo
            </Typography>
            <Typography
              mb=".5rem"
              fontFamily="Open Sans"
              variant="body1"
              color="#FBFBFB"
            >
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
                width: "100%",
              }}
            >
              <TextField
                size="small"
                sx={{
                  bgcolor: "white",
                  borderRadius: "8px",
                  width: { xs: "100%", sm: "400px" },
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
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  minWidth: "150px",
                }}
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
                style={{ color: "white" }}
                to="/politica-de-privacidade"
                color="white"
                target="_blank"
              >
                <Typography ml={1} variant="body1">
                  Concordo com a Pol??tica de Privacidade
                </Typography>
              </Link>
            </Box>
          </Layout.inputContainer>

          <Box minWidth="250px" paddingLeft="1rem">
            <Typography variant="button" fontFamily="Fira Sans" color="white">
              Contribua com O amazilia
            </Typography>
            <Typography fontFamily="Open Sans" color="white">
              Banco Ita?? (341) <br />
              Ag??ncia: 0151 <br />
              Conta corrente: 14.773-3 <br />
              CNPJ: 37.389.697/0001-44 <br />
              <span>
                PIX: 37389697000144{" "}
                <IconButton
                  style={{ color: "white" }}
                  onClick={() => copyToClipboard("37389697000144")}
                >
                  <FileCopyIcon />
                </IconButton>
              </span>
            </Typography>
          </Box>
        </Layout.newsLetterContainer>

        <Divider
          flexItem
          orientation="horizontal"
          color="#FBFBFB"
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}
        />
        <Feedback
          key={uuidv4()}
          msg={msg}
          severity={severity}
          open={open}
          setOpen={setOpen}
        />
        <Box sx={{ maxWidth: "100%" }}>
          <Typography variant="caption" color="#ECEDEE">
            A Associa????o Amazilia ?? isenta do recolhimento de ITCMD (Imposto
            sobre Transmiss??o ???Causa Mortis??? e Doa????o de Quaisquer Bens ou
            Direitos), nos termos do ?? 2?? do artigo 6?? da Lei 10.705/00, na
            reda????o da Lei 10.992/01, e do ?? 1?? do art. 6?? e do artigo 9?? do
            Decreto 46.655/02, com validade at?? 30/01/2026.
          </Typography>
        </Box>
        <Divider
          flexItem
          orientation="horizontal"
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}
          color="#FBFBFB"
        />
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
          display="flex"
          width="100%"
          justifyContent="space-between"
        >
          <Box>
            <img src={Logo} />
          </Box>
          <Link to="/politica-de-privacidade" color="white" target="_blank">
            <Typography ml={1} variant="button">
              Pol??tica de Privacidade
            </Typography>
          </Link>
          <Link to="/politica-de-privacidade" color="white" target="_blank">
            <Typography ml={1} variant="button">
              Pol??tica de cookies
            </Typography>
          </Link>
          <Typography color="white">
            ?? 2021. Todos os direitos reservados.
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
      </Layout.section>
    </>
  );
}
