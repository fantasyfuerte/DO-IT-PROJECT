import { useEffect, useState } from "react";
import { Quotes } from "../constants";
import { QuoteCard } from "./components/QuoteCard";
import { motion, AnimatePresence } from "motion/react";

const QuotesApp: React.FC = () => {
  function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  const [currentIndex, setCurrentIndex] = useState(
    getRandomNumber(Quotes.length)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(getRandomNumber(Quotes.length));
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block mx-2 h-screen md:h-fit"
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1 }}
          key={currentIndex}
          exit={{ opacity: 0, transform: "translateX(-20px)" }}
        >
          <QuoteCard quote={Quotes[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default QuotesApp;
