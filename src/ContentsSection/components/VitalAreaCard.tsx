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
      className={`bg-transparent p-10 md:h-80 flex-grow rounded-lg flex justify-center items-center vitalareacard cursor-default`}
    >
      <h2 className={`${area.color} text-6xl font-black cursor-pointer`}>
        {area.title}
      </h2>
    </motion.a>
  );
};

export default VitalAreaCard;
