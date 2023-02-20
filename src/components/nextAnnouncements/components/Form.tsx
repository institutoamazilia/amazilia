import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import Feedback from "../../feedback/Feedback";
import * as Layout from "./Form.styles";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [severity, setSeverity] =
    useState<"success" | "warning" | "info" | "error">("success");
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY;
    try {
      const response = await axios
        .post(
          "https://api.sendinblue.com/v3/contacts",
          {
            email,
            listIds: [3], // Editais
            attributes: { firstname: name, message: message },
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
          }
        )
        .then(() => {
          setOpen(true);
          setSeverity("success");
          setMsg("Obrigado pelo interesse! Recebemos sua resposta. ❤️");
        })
        .catch((error) => {
          setOpen(true);
          setSeverity("error");

          // duplicate_parameter precisa criar a excessao do email ja existir nos contatos
          setMsg(
            "Erro inesperado, por favor entre em contato com nosso suporte"
          );
        });
    } catch (error) {
      console.log("Erro: ", error);
    }
  };
  return (
    <>
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{
          gap: "1rem",
          display: "flex",
          maxWidth: { sx: "100%", md: "60%" },
        }}
      >
        <Layout.inputContainer>
          <Layout.input
            id="name-basic"
            placeholder="Nome"
            variant="outlined"
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <Layout.input
            id="name-basic"
            placeholder="E-mail"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Layout.inputContainer>
        <Layout.input
          sx={{
            bgcolor: "white",
            borderRadius: "6px",
            color: "#160226",
            minWidth: { xs: "auto", md: "418px" },
          }}
          multiline
          value={message}
          rows={4}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Deixe sua mensagem"
        ></Layout.input>
        <Button
          sx={{ maxWidth: "75px", fontFamily: "Fira Sans" }}
          variant="contained"
          type="submit"
        >
          Enviar
        </Button>
      </FormControl>
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
