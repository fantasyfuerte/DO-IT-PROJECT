import VitalAreaCard from "@/ContentsSection/VitalAreaCard";

const vitalAreas = [
  {
    id: 1,
    title: "Health",
    route: "/health",
    background: "bg-green-950",
  },
  {
    id: 2,
    title: "Social",
    route: "/social",
    background: "bg-red-950",
  },
  {
    id: 3,
    title: "Thrive",
    route: "/thrive",
    background: "bg-purple-950",
  },
];

const ContentSection = () => {
  return (
    <section className="h-[84vh] flex flex-col md:flex-row md:flex-wrap">
      {vitalAreas.map((area) => (
        <VitalAreaCard key={area.id} area={area} />
      ))}
    </section>
  );
};
export default ContentSection;
