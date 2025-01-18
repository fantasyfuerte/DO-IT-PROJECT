import AboutUs from "@/components/AboutUs";
import HowToUse from "@/components/HowToUse";
import ContentSection from "@/ContentsSection/ContentsSection";
import QuotesApp from "@/QuotesApp/QuotesApp";
import ToDoApp from "@/ToDoApp/ToDoApp";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-24 md:grid md:grid-cols-2 md:items-center justify-center px-3 h-screen ]">
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
