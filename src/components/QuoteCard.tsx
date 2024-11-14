import { Quote } from "@/types";

interface Props {
  quote: Quote;
}

export const QuoteCard: React.FC<Props> = ({ quote }) => {
  return (
    <article className="md:px-20 flex flex-col items-center">
      <p className="textshadow text-3xl font-normal text-wrap text-center">
        "{quote.content}"
      </p>
      <h6 className="textshadow text-3xl p-2 font-semibold">{quote.author}</h6>
    </article>
  );
};
