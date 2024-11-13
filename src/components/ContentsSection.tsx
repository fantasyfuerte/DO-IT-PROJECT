import VitalAreaCard from "@/components/VitalAreaCard";

const vitalAreas = [
  {
    id: 1,
    title: "Health",
    route: "/health",
    background: "bg-green-600",
  },
  {
    id: 2,
    title: "Social",
    route: "/social",
    background: "bg-red-600",
  },
  {
    id: 3,
    title: "Thrive",
    route: "/thrive",
    background: "bg-purple-600",
  },
];

const ContentSection = () => {
  return (
    <section className="height-80 flex flex-col md:flex-row mdjustify-around">
      {vitalAreas.map((area) => (
        <VitalAreaCard area={area} />
      ))}
    </section>
  );
};
export default ContentSection;
