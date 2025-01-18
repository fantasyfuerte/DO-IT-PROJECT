import AboutUs from "@/components/AboutUs";
import HowToUse from "@/components/HowToUse";
import ContentSection from "@/ContentsSection/ContentsSection";
import QuotesApp from "@/QuotesApp/QuotesApp";
import ToDoApp from "@/ToDoApp/ToDoApp";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="md:gap-6 md:grid md:grid-cols-2 md:items-center px-3 md:h-screen">
        <ToDoApp />
        <QuotesApp />
      </div>
      <ContentSection />
      <section>
        <HowToUse />
        <AboutUs />
      </section>
    </>
  );
};
