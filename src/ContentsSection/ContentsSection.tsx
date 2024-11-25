import VitalAreaCard from "@/ContentsSection/components/VitalAreaCard";
import WhyThisAreas from "@/ContentsSection/components/WhyThisAreas";
import { vitalAreas } from "@/constants";

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
      <WhyThisAreas />
    </>
  );
};
export default ContentSection;
