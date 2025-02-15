import VitalAreaCard from "@/ContentsSection/components/VitalAreaCard";
import WhyThisAreas from "@/ContentsSection/components/WhyThisAreas";
import { vitalAreas, articles } from "@/constants";
import StyledArticle from "./components/StyledArticle";

const ContentSection = () => {
  return (
    <>
      <h6 className="text-xl text-center px-3">
        When unsure where to begin, start with these three areas of your life:
      </h6>
      <section className="flex flex-col md:flex-row md:flex-wrap md:mx-28 pb-12">
        {vitalAreas.map((area) => (
          <VitalAreaCard key={area.id} area={area} />
        ))}
      </section>
      <WhyThisAreas />
      <section>
        {articles.map((article) => (
          <StyledArticle
            key={article.id}
            id={article.id}
            title={article.title}
            subtitle={article.subtitle}
            paragraph={article.paragraph}
            imgs={article.imgs}
            centerImg={article.centerImg}
          />
        ))}
      </section>
    </>
  );
};
export default ContentSection;
