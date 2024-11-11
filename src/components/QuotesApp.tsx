import {Quotes} from '../constants'
import { QuoteCard } from "./QuoteCard";


const QuotesApp: React.FC = () => {
  return (
    <section className="inline-block w-full p-6 md:mt-8 xl:mt-16">
      <QuoteCard quote={Quotes[1]} />
    </section>
  );
};

export default QuotesApp;
