import car from "../../assets/carIcon.png";
import listening from "../../assets/listeningIcon.png";
import notes from "../../assets/notesIcon.png";
import book from "../../assets/openBookIcon.png";
import { ReactElement } from "react";

interface IActivities {
  subtitle1: string;
  subtitle2: string;
  cards: IActivitiesCard[];
}

export interface IActivitiesCard {
  icon: string;
  title: string;
}

export const ActivitiesTitle = (
  <h1 style={{ color: "#522D6D" }}>
    Transformando <span style={{ color: "#E15383" }}>boas intenções</span>{" "}
    <br />
    em <span style={{ color: "#E15383" }}>realidade de impacto</span>
  </h1>
);

export const ActivitiesCards: IActivities = {
  subtitle1:
    "Capacitamos gestores de OSCs (ONGs) para que possam gerar melhor impacto social positivo.",
  subtitle2: "Algumas das atividades que fazemos são:",

  cards: [
    {
      icon: notes,
      title: "Diagnósticos",
    },
    {
      icon: book,
      title: "Capacitações online ou presenciais",
    },
    {
      icon: listening,
      title: "Sessões de mentorias",
    },
    {
      icon: car,
      title: "Visitas técnicas às OSCs",
    },
  ],
};
