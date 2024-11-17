import { useEffect, useState } from "react";
import { Quotes } from "../constants";
import { QuoteCard } from "./components/QuoteCard";

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
    <section className="mt-20 md:mt-0 md:ml-6 inline-block p-6 basis-3/5">
      <QuoteCard quote={Quotes[currentIndex]} />
    </section>
  );
};

export default QuotesApp;
