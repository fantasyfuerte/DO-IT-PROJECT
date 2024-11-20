import { motion } from "motion/react";

interface Props {
  area: {
    title: string;
    id: number;
    route: string;
    background: string;
  };
}

const VitalAreaCard: React.FC<Props> = ({ area }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      transition={{ delay: (area.id*2)/10,duration:0.5 }}
      whileInView={{ opacity: 1 }}
      className={`${area.background} h-44 md:h-96 flex-grow m-5 rounded-lg flex justify-center items-center`}
    >
      <h2 className="text-7xl font-black text-white">{area.title}</h2>
    </motion.article>
  );
};

export default VitalAreaCard;
