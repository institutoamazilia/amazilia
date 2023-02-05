import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";

export default function Results() {
  return (
    <>
      <Box id="results" sx={{ padding: "6rem" }}>
        <Box>
          <Typography fontFamily="Fira Sans" color="#522D6D" variant="h3">
            {data.title}
          </Typography>
          <Typography fontFamily="Open Sans" color="#260441">
            {data.subt}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginTop: "3rem",
            }}
          >
            {data.cards.map((item, index) => (
              <Box
                key={uuidv4()}
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <Typography
                  key={uuidv4()}
                  color="#522D6D"
                  fontFamily="Fira Sans"
                >
                  {item.title}
                </Typography>
                <Box
                  key={uuidv4()}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "90%",
                    justifyContent: "space-between",
                  }}
                >
                  {item.values.map((i, key) => (
                    <Box
                      key={uuidv4()}
                      sx={{
                        display: "flex",
                        marginRight: "1rem",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        key={uuidv4()}
                        color="#E08C27"
                        fontFamily="Fira Sans"
                        fontWeight="400"
                        fontSize="96px"
                      >
                        {i.value}
                      </Typography>
                      <Typography
                        key={uuidv4()}
                        width="70%"
                        fontFamily="Fira Sans"
                        fontSize="28px"
                        color="#522D6D"
                      >
                        {" "}
                        {i.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
