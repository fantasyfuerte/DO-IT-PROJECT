import { motion } from "motion/react";

export default function HowToUse() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      id="how-to-use"
      className="mt-36 md:px-28"
    >
      <h4 className="text-4xl font-bold text-center text-gray-950 mb-14">
        How to Use
      </h4>
      <div className="flex flex-col items-center md:grid grid-cols-3 gap-10">
        <p className="text-gray-800 leading-relaxed text-lg px-3">
          1. <strong>Add your tasks</strong>: Write up to 5 things you need to
          do. Start with the most important ones for you. You can add tasks
          later.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg px-3">
          2. <strong>Reorganize tasks</strong>: Adjust the order of your tasks
          using the <em className="text-black font-semibold">drag and drop</em>{" "}
          feature. This helps you easily prioritize and focus on what matters
          most.
        </p>
        <p className="text-gray-800 leadinge-relaxed text-lg px-3 ">
          3. <strong>Mark tasks as completed</strong>: Once you finish a task,
          tap it to mark it as completed. You can also filter tasks to view only
          completed or active ones.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg px-3 ">
          4. <strong>Stay motivated constantly</strong>: Every 10 seconds,
          motivational quotes will appear on the screen to keep you focused.
        </p>
        <p className="text-gray-800 leading-relaxed text-lg px-3 col-span-2">
          5. <strong>Receive personalized guidance</strong>: If you're unsure
          where to start, <strong>Do-It-Now</strong> will guide you by
          explaining why health, love, and professional fulfillment are the most
          important areas of life, helping you prioritize your tasks with
          clarity and balance.
        </p>
        <p className="text-gray-800 leading-tight text-lg px-3 mt-4 col-start-2 md:text-center">
          With <strong>Do-It-Now</strong>, staying organized is easy and
          motivating! Start now and transform your days!
        </p>
      </div>
    </motion.article>
  );
}
