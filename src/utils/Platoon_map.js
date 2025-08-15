import { FaShieldAlt } from 'react-icons/fa';
import { GiBroadsword } from "react-icons/gi";
import { LiaHorseHeadSolid } from "react-icons/lia";
import { GiArcheryTarget } from "react-icons/gi";
import { TbArcheryArrow } from "react-icons/tb";
import { GiHorseHead } from "react-icons/gi";

export const Platoons = [
  {
    unit: "Militia",
    description: "Basic infantry unit, good for early game defense and scouting.",
    icon: <FaShieldAlt />
  },
  {
    unit: "Spearmen",
    description: "Well-rounded infantry unit with balanced attack and defense capabilities.",
    icon: <GiBroadsword />
  },
  {
    unit: "Light Cavalry",
    description: "Fast and agile mounted unit, excels at reconnaissance and rapid response.",
    icon: <LiaHorseHeadSolid />
  },
  {
    unit: "Heavy Cavalry",
    description: "Powerful and heavily armored mounted unit, effective at breaking enemy lines.",
    icon: <GiHorseHead />
  },
  {
    unit: "Foot Archery",
    description: "Basic ranged unit, good for harassing enemy units from a distance.",
    icon: <GiArcheryTarget />
  },
  {
    unit: "Heavy Archery",
    description: "Elite ranged unit with increased damage output and accuracy.",
    icon: <TbArcheryArrow />
  },
]