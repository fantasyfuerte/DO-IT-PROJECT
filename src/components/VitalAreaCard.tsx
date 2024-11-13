interface Props {
  area: {
    title: string;
    id: number;
    route: string;
    background: string;
  };
}

const VitalAreaCard: React.FC<Props> = ({ area }) => {
  return (
    <article
      className={`${area.background} h-56 flex-grow m-5 rounded-lg flex justify-center items-center`}
    >
      <h2 className="text-7xl font-black text-white">{area.title}</h2>
    </article>
  );
};

export default VitalAreaCard;
