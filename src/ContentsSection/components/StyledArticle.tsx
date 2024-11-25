interface Props {
    
}

const StyledArticle: React.FC<Props> = () => {
  return (
    <article className="flex max-h-max flex-wrap items-end mb-48">
      <div className="basis-6/12 flex-grow min-w-[28em] pr-4 md:pr-0 pl-4 mb-7">
        <h5 className="text-5xl">
          Health: <br />
          <strong className="text-gray-950">The Cornerstone</strong>
        </h5>
        <p className="text-lg font-semibold mt-8 text-pretty first-letter:ml-2">
          Health is fundamental for a full and balanced life. Adopting an
          ancestral diet, rich in natural and unprocessed foods, can strengthen
          both body and mind. Sun exposure not only boosts your mood and vitamin
          D production, but it also makes you more attractive by giving your
          skin a beautiful tan. Additionally, intermittent fasting promotes
          efficient digestion and helps regulate metabolism. Habits like these
          create synergy among themselves and with other areas of your life,
          enhancing your overall well-being. Interested in learning more about
          how to incorporate them into your routine?
        </p>
      </div>
      <div className="basis-5/12 flex-grow h-80 px-2 md:p-5 pb-0">
        <img
          src="./health/h4.jpg"
          className="object-cover object-bottom w-full h-full rounded-xl"
        />
      </div>
    </article>
  );
};

export default StyledArticle;
