import { VitalArea } from "@/types";
import { motion } from "motion/react";

interface Props {
  area: VitalArea;
}

const VitalAreaCard: React.FC<Props> = ({ area }) => {
  return (
    <motion.a
      href={area.url}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: (area.id * 2) / 10, duration: 0.5 }}
      className={`bg-transparent h-44 md:h-80 flex-grow m-5 rounded-lg flex justify-center items-center vitalareacard `}
    >
      <h2 className={`${area.color} text-7xl font-black`}>{area.title}</h2>
    </motion.a>
  );
};

export default VitalAreaCard;
