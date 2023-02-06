import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import priscila from "../../assets/priscila.png";
import { data } from "../testimony/data";
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
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={`panel${index}-header`}
          >
            <Avatar src={item.img} />

            <div>
              <Typography ml={2} sx={{ color: "text.secondary" }}>
                {item.name}
              </Typography>
              <Typography ml={2} sx={{ color: "text.secondary" }}>
                {item.local}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.testimony}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
