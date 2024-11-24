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
      <h6 className="mt-20 text-2xl text-center px-3">
        When unsure where to begin, start with these three areas of your life:
      </h6>
      <section className="h-[70vh] flex flex-col md:flex-row md:flex-wrap ">
        {vitalAreas.map((area) => (
          <VitalAreaCard key={area.id} area={area} />
        ))}
      </section>
      <article className="px-6 mt-10 h-screen">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl text-center font-semibold mb-3"
          transition={{ delay: 0.35 }}
        >
          Why this 3 areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-950 text-xl mt:m-8 mt-12 text-center md:text-pretty"
        >
          These three areas are fundamental to a fulfilling and balanced life,
          and are inextricably linked. They don't exist in isolation; instead,
          they influence and support each other in a complex interplay.
          <br/>Improvements in one area often create a positive ripple effect,
          boosting progress in the others.<br/>
          A holistic strategy that acknowledges and addresses
          the synergistic relationships between these three key areas is the
          most effective path towards sustainable and comprehensive well-being.
        </motion.p>
      </article>
    </>
  );
};
export default ContentSection;
