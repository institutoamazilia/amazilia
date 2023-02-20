import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import * as Layout from "./Form.styles";
export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const apiKey = import.meta.env.VITE_SENDINBLUE_APIKEY;

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
          listIds: [3], //	Editais
          attributes: { firstname: name, message: message },
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
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
            minWidth: "418px",
          }}
          multiline
          rows={4}
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
    </>
  );
}
