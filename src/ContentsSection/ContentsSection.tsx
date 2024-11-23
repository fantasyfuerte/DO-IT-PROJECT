import VitalAreaCard from "@/ContentsSection/VitalAreaCard";
import { motion } from "motion/react";

const vitalAreas = [
  {
    id: 1,
    title: "Health",
    route: "/health",
    color: "text-green-950",
  },
  {
    id: 2,
    title: "Social",
    route: "/social",
    color: "text-red-950",
  },
  {
    id: 3,
    title: "Thrive",
    route: "/thrive",
    color: "text-purple-950",
    
  },
];

const ContentSection = () => {
  return (
    <>
      <section className="h-[84vh] flex flex-col md:flex-row md:flex-wrap">
        {vitalAreas.map((area) => (
          <VitalAreaCard key={area.id} area={area} />
        ))}
      </section>
      <article className="p-6 pt-12 h-screen">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl text-center font-semibold my-3"
          transition={{ delay: 0.35 }}
        >
          Why this 3 areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-950 text-xl m-4"
        >
          These three areas are fundamental to a fulfilling and balanced life,
          and are inextricably linked. They don't exist in isolation; instead,
          they influence and support each other in a complex interplay.
          Improvements in one area often create a positive ripple effect,
          boosting progress in the others. For example, improved physical health
          through regular exercise can lead to increased energy levels, boosting
          mental well-being and potentially productivity, which can contribute
          to improved financial security. Conversely, challenges in one area can
          trigger a negative cascade. Neglecting mental health, for instance,
          can lead to decreased productivity and potentially financial hardship,
          which, in turn, can exacerbate feelings of stress and anxiety, further
          impacting mental well-being. Therefore, an integrated approach is
          absolutely essential. Focusing solely on one area, while neglecting
          the interconnectedness with the others, would not only limit progress
          in those neglected areas but would also ultimately hinder overall
          advancement and the achievement of a truly balanced and fulfilling
          life. A holistic strategy that acknowledges and addresses the
          synergistic relationships between these three key areas is the most
          effective path towards sustainable and comprehensive well-being.
        </motion.p>
      </article>
    </>
  );
};
export default ContentSection;
