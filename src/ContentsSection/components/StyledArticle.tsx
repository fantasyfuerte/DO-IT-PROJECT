interface Props {
  title: string;
  subtitle: string;
  paragraph: string;
  imgs: string[];
  centerImg?: boolean;
}

const StyledArticle: React.FC<Props> = ({
  title,
  subtitle,
  paragraph,
  imgs,
  centerImg,
}) => {
  return (
    <article className="flex max-h-max flex-wrap items-end mb-48">
      <div className="basis-6/12 flex-grow min-w-min pr-4 md:pr-0 pl-4 mb-7">
        <h5 className="text-5xl">
          {title}: <br />
          <strong className="text-gray-950">{subtitle}</strong>
        </h5>
        <p className="text-lg font-semibold mt-8 text-pretty first-letter:ml-2">
          {paragraph}
        </p>
      </div>
      <div className="basis-5/12 flex-grow h-80 px-2 md:p-5 pb-0">
        <img
          src={imgs[3]}
          className={`object-cover ${
            !centerImg && "object-bottom"
          } w-full h-full rounded-xl`}
        />
      </div>
    </article>
  );
};

export default StyledArticle;
