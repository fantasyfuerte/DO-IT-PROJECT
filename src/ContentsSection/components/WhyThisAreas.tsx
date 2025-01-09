import { motion } from "motion/react";

const WhyThisAreas = () => {
  return (
    <article className="px-6 mt-16 py-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl text-center font-semibold mb-3"
        transition={{ delay: 0.35 }}
      >
        Why this 3 areas
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-950 text-lg font-semibold  flex flex-col md:grid md:grid-cols-2 gap-10 mx-4 md:mx-24 mt-12 text-center"
      >
        <p>
          These three areas are fundamental to a fulfilling and balanced life,
          and are inextricably linked. They don't exist in isolation; instead,
          they influence and support each other in a complex interplay.
        </p>
        <p>
          Improvements in one area often create a positive ripple effect,
          boosting progress in the others. For example, a healthy diet can
          improve physical health, while mental health can improve physical
          health, etc.
        </p>
        <p className="col-span-2">
          A holistic strategy that acknowledges and addresses the synergistic
          relationships between these three key areas is the most effective path
          towards sustainable and comprehensive well-being. By focusing on these
          areas, we can create a more balanced and fulfilling life. This
          approach is the foundation of the DO-IT methodology.
        </p>
      </motion.div>
    </article>
  );
};

export default WhyThisAreas;
