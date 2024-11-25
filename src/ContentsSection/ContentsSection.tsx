import VitalAreaCard from "@/ContentsSection/components/VitalAreaCard";
import WhyThisAreas from "@/ContentsSection/components/WhyThisAreas";
import { vitalAreas } from "@/constants";

const ContentSection = () => {
  return (
    <>
      <h6 className="mt-12 text-2xl text-center px-3">
        When unsure where to begin, start with these three areas of your life:
      </h6>
      <section className="h-[70vh] flex flex-col md:flex-row md:flex-wrap ">
        {vitalAreas.map((area) => (
          <VitalAreaCard key={area.id} area={area} />
        ))}
      </section>
      <WhyThisAreas />
      <section>
        <article className="flex max-h-max flex-wrap items-center mb-48 pl-4">
          <div className="basis-6/12 flex-grow min-w-[28em]">
            <h5 className="text-5xl">
              Health: <br />{" "}
              <strong className="text-gray-950">The Cornerstone</strong>
            </h5>
            <p className="text-lg font-semibold mt-5 text-pretty first-letter:ml-2">
              Health is fundamental for a full and balanced life. Adopting an
              ancestral diet, rich in natural and unprocessed foods, can
              strengthen both body and mind. Sun exposure not only boosts your
              mood and vitamin D production, but it also makes you more
              attractive by giving your skin a beautiful tan. Additionally,
              intermittent fasting promotes efficient digestion and helps
              regulate metabolism. Habits like these create synergy among
              themselves and with other areas of your life, enhancing your
              overall well-being. Interested in learning more about how to
              incorporate them into your routine?
            </p>
          </div>
          <div className="basis-5/12 flex-grow h-80 p-4">
            <img
              src="./health/h3.jpg"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </article>
      </section>
    </>
  );
};
export default ContentSection;
