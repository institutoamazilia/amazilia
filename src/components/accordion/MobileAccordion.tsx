import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { data } from "../testimony/data";
import { v4 as uuidv4 } from "uuid";

export default function MobileAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {data.cards.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={uuidv4()}
        >
          <AccordionSummary
            key={uuidv4()}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={`panel${index}-header`}
          >
            <Avatar key={uuidv4()} src={item.img} />

            <div>
              <Typography
                key={uuidv4()}
                ml={2}
                sx={{ color: "text.secondary" }}
              >
                {item.name}
              </Typography>
              <Typography
                key={uuidv4()}
                ml={2}
                sx={{ color: "text.secondary" }}
              >
                {item.local}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails key={uuidv4()}>
            <Typography key={uuidv4()}> {item.testimony}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
