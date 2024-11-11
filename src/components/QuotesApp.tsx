import { useEffect, useState } from "react";
import { Quotes } from "../constants";
import { QuoteCard } from "./QuoteCard";

const QuotesApp: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);// This is the element that will be shown

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Quotes.length);
    }, 10000); // Cambia cada 1000 ms
    return () => clearInterval(intervalId); // Cleans up the interval on unmount
  }, [Quotes.length]);

  return (
    <section className="inline-block w-full p-6 md:mt-8 xl:mt-16">
      <QuoteCard quote={Quotes[currentIndex]} />
    </section>
  );
};

export default QuotesApp;
