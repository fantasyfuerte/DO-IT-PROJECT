import { useEffect, useState } from "react";
import { Quotes } from "../constants";
import { QuoteCard } from "./components/QuoteCard";
import {motion} from 'motion/react'

const QuotesApp: React.FC = () => {
  function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  const [currentIndex, setCurrentIndex] = useState(getRandomNumber(50));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(getRandomNumber(50));
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.8}} className="mt-20 md:mt-0 md:ml-6 inline-block p-6 basis-3/5">
      <QuoteCard quote={Quotes[currentIndex]} />
    </motion.section>
  );
};

export default QuotesApp;
