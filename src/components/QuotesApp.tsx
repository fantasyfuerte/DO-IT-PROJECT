import { useEffect, useState } from "react";
import { Quotes } from "../constants";
import { QuoteCard } from "./QuoteCard";

const QuotesApp: React.FC = () => {

  function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * (max)); // +1 para incluir el valor max
  }

  const [currentIndex, setCurrentIndex] = useState(
    getRandomNumber(50)
  ); // This is the element that will be shown

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(getRandomNumber(50));
    }, 10000); // Cambia cada 1000 ms
    return () => clearInterval(intervalId); // Cleans up the interval on unmount
  }, [Quotes.length]);

  return (
    <section className="md:ml-6 inline-block w-full p-6 mt-10 mb-10 md:mb-0 md:mt-8 xl:mt-16">
      <QuoteCard quote={Quotes[currentIndex]} />
    </section>
  );
};

export default QuotesApp;
