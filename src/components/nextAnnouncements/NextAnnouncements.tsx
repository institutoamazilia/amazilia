import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../assets/NextAnnouncements-image.png";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { data } from "./data";

export default function NextAnnouncements() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY;

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
          listIds: [6], //	Editais
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
    <Box id="Próximos Editais" bgcolor="#F2A03D" sx={{ display: "flex" }}>
      <Box
        sx={{
          paddingLeft: { xs: "1rem", sm: "6.5rem" },
          maxWidth: { xs: "100%", sm: "50%" },
          paddingTop: "2.5rem",
          paddingBottom: "1.9rem",
        }}
      >
        <Typography fontFamily="Fira Sans" variant="h3" color="#260441">
          {data.title}
        </Typography>
        <Typography my="1rem" fontFamily="Open Sans" color="#181D27">
          {data.subt}
        </Typography>

        <FormControl
          component="form"
          onSubmit={handleSubmit}
          sx={{ gap: "1rem" }}
        >
          <Box>
            <TextField
              sx={{
                bgcolor: "white",
                borderRadius: "6px",
                color: "#160226",
                width: { xs: "90%", sm: "40%" },
              }}
              id="name-basic"
              placeholder="Nome"
              variant="outlined"
              type="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <TextField
              sx={{
                bgcolor: "white",
                borderRadius: "6px",
                marginLeft: { xs: "0", sm: "1rem" },
                marginTop: { xs: "1rem", sm: "0" },

                color: "#160226",
                width: { xs: "100%", sm: "50%" },
              }}
              id="name-basic"
              placeholder="E-mail"
              variant="outlined"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Box>
          <TextField
            sx={{
              bgcolor: "white",
              borderRadius: "6px",
              color: "#160226",
              width: { xs: "90%" },
            }}
            multiline
            rows={4}
            placeholder="Deixe sua mensagem"
          ></TextField>
          <Button
            sx={{ maxWidth: "75px", fontFamily: "Fira Sans" }}
            variant="contained"
            type="submit"
          >
            Enviar
          </Button>
        </FormControl>
      </Box>
      <Box sx={{ position: "relative", display: { xs: "none", sm: "block" } }}>
        <Box sx={{ position: "absolute", left: "-100px" }}>
          <img
            style={{ width: "790px" }}
            src={image}
            alt="proximos editais foto"
          />
        </Box>
      </Box>
    </Box>
  );
}
