import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  paragraph: string;
  imgs: string[];
  centerImg?: boolean;
  id?: string;
}

const StyledArticle: React.FC<Props> = ({
  title,
  subtitle,
  paragraph,
  imgs,
  centerImg,
  id,
}) => {
  const [img, setImg] = useState(0);
  const changeImg = () => {
    setImg((prev) => {
      if (prev == imgs.length - 1) return 0;
      return prev + 1;
    });
  };
  return (
    <motion.article
      id={id}
      transition={{ delay: 0.3, duration: 0.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex max-h-max flex-wrap items-end pt-32"
    >
      <div className="basis-6/12 flex-grow min-w-min pr-4 md:pr-0 pl-4 mb-7">
        <h5 className="text-5xl min-w-60">
          {title}: <br />
          <strong className="text-gray-950">{subtitle}</strong>
        </h5>
        <p className="text-lg text-gray-800 font-semibold mt-8 text-pretty first-letter:ml-2">
          {paragraph}
        </p>
      </div>
      <div className="basis-5/12 flex-grow h-80 px-2 md:p-5 pb-0">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          onViewportEnter={changeImg}
          src={imgs[img]}
          className={`object-cover ${
            !centerImg && "object-bottom"
          } w-full h-full rounded-xl`}
        />
      </div>
    </motion.article>
  );
};

export default StyledArticle;
