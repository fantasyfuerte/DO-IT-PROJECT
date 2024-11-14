import { RiArrowDownWideFill } from "react-icons/ri";

const ScrollDownText: React.FC = () => {
  return (
    <div
      className={`hidden md:flex flex-col bg w-full items-center fixed bottom-1`}
    >
      <p>
        <strong>Scroll down</strong> or press <strong>space</strong>
      </p>
      <RiArrowDownWideFill size={50} />
    </div>
  );
};

export default ScrollDownText;
