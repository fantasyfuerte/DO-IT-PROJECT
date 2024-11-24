import VitalAreaCard from "@/ContentsSection/components/VitalAreaCard";
import WhyThisAreas from '@/ContentsSection/components/WhyThisAreas'
const vitalAreas = [
  {
    id: 1,
    title: "Health",
    route: "/health",
    color: "text-green-950",
  },
  {
    id: 2,
    title: "Social",
    route: "/social",
    color: "text-red-950",
  },
  {
    id: 3,
    title: "Thrive",
    route: "/thrive",
    color: "text-purple-950",
  },
];

const ContentSection = () => {
  return (
    <>
      <h6 className="mt-20 text-2xl text-center px-3">
        When unsure where to begin, start with these three areas of your life:
      </h6>
      <section className="h-[70vh] flex flex-col md:flex-row md:flex-wrap ">
        {vitalAreas.map((area) => (
          <VitalAreaCard key={area.id} area={area} />
        ))}
      </section>
      <WhyThisAreas/>
    </>
  );
};
export default ContentSection;
