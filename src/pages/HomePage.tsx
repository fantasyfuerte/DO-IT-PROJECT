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
        className="px-4 h-screen"
      >
        <h2 className="text-5xl text-center font-semibold my-3">
          Why this 3 areas
        </h2>
        <p className="text-gray-950 text-xl m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum
          impedit sit error, tempora voluptatibus quisquam, rerum ipsa omnis,
          eius officiis non! Dolorem omnis nesciunt dolor ipsa molestias,
          veritatis nulla. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Nam impedit eveniet modi sequi doloribus voluptates beatae
          fugiat dolorem dolore explicabo officiis, architecto alias
          voluptatibus repudiandae velit vel laboriosam at minus!
        </p>
      </motion.div>
    </>
  );
};
