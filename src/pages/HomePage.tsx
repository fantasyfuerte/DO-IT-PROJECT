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
        <article id="how-to-use" className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h4 className="text-4xl font-bold text-center text-gray-950 mb-4">
            How to Use
          </h4>
          <p className="text-gray-800 leading-relaxed text-lg px-3">
            <br/>
            1. <strong>Add your tasks</strong>: Write up to 5 things you need to
            do. Start with the most important ones for you.
            <br />
            <br />
            2. <strong>Reorganize tasks</strong>: Adjust the order of your tasks
            using the <em>drag and drop</em> feature. This helps you easily
            prioritize and focus on what matters most.
            <br />
            <br />
            3. <strong>Mark tasks as completed</strong>: Once you finish a task,
            tap it to mark it as completed. You can also filter tasks to view
            only completed or active ones, helping you stay focused.
            <br />
            <br />
            4. <strong>Stay motivated constantly</strong>: Every 10 seconds,
            motivational quotes will appear on the screen to keep you energized
            and focused throughout the process.
            <br />
            <br />
            5. <strong>Receive personalized guidance</strong>: If you're unsure
            where to start, <strong>Do-It-Now</strong> will guide you by
            explaining why health, love, and professional fulfillment are the
            most important areas of life, helping you prioritize your tasks with
            clarity and balance.
            <br />
            <br />
            With <strong>Do-It-Now</strong>, staying organized is easy and
            motivating! Start now and transform your days!
          </p>
        </article>
      </section>
    </>
  );
};
