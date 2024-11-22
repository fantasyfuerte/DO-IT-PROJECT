import ScrollDownText from "@/components/ScrollDownText";
import ContentSection from "@/ContentsSection/ContentsSection";
import QuotesApp from "@/QuotesApp/QuotesApp";
import ToDoApp from "@/ToDoApp/ToDoApp";
import { motion } from "motion/react";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-32 md:mt-0 md:justify-between justify-start items-center h-[83vh] md:h-screen">
        <ToDoApp />
        <QuotesApp />
      </div>
      <ScrollDownText />
      <ContentSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-6 pt-12 h-screen"
      >
        <h2 className="text-5xl text-center font-semibold my-3">
          Why this 3 areas
        </h2>
        <p className="text-gray-950 text-xl m-4">
          These three areas are fundamental to a fulfilling and balanced life, and are inextricably linked. They don't exist in isolation; instead, they influence and support each other in a complex interplay. Improvements in one area often create a positive ripple effect, boosting progress in the others. For example, improved physical health through regular exercise can lead to increased energy levels, boosting mental well-being and potentially productivity, which can contribute to improved financial security. Conversely, challenges in one area can trigger a negative cascade. Neglecting mental health, for instance, can lead to decreased productivity and potentially financial hardship, which, in turn, can exacerbate feelings of stress and anxiety, further impacting mental well-being. Therefore, an integrated approach is absolutely essential. Focusing solely on one area, while neglecting the interconnectedness with the others, would not only limit progress in those neglected areas but would also ultimately hinder overall advancement and the achievement of a truly balanced and fulfilling life. A holistic strategy that acknowledges and addresses the synergistic relationships between these three key areas is the most effective path towards sustainable and comprehensive well-being.
        </p>
      </motion.div>
    </>
  );
};
