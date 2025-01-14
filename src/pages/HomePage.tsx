import AboutUs from "@/components/AboutUs";
import HowToUse from "@/components/HowToUse";
import ContentSection from "@/ContentsSection/ContentsSection";
import QuotesApp from "@/QuotesApp/QuotesApp";
import ToDoApp from "@/ToDoApp/ToDoApp";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-32 md:mt-0 md:justify-between justify-start items-center h-[83vh] md:h-screen">
        <ToDoApp />
        <QuotesApp />
      </div>
      <ContentSection />
      <section>
        <HowToUse />
        <AboutUs/>
      </section>
    </>
  );
};
