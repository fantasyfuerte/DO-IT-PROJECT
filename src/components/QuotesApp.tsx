import { useEffect, useState } from "react";
import { Quotes } from "../constants";
import { QuoteCard } from "./QuoteCard";

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
    <section className="md:ml-6 inline-block w-full p-6 mt-10 mb-10 md:mb-0 md:mt-8 xl:mt-16">
      <QuoteCard quote={Quotes[currentIndex]} />
    </section>
  );
};

export default QuotesApp;
