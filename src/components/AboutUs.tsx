import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      id="about-us"
      className="bg-white p-8 rounded-lg shadow-lg w-full"
    >
      <h1 className="text-3xl font-bold text-gray-950 text-center mb-6">
        About Us
      </h1>
      <p className="text-gray-800 leading-relaxed text-lg">
        At <strong>Do-It-Now</strong>, we believe that staying organized doesn't
        have to be complicated. Our mission is to provide a simple yet powerful
        tool that helps you take control of your day with ease. Whether you’re
        managing daily tasks or searching for a spark of motivation, we’re here
        to guide you every step of the way.
      </p>
      <p className="text-gray-800 leading-relaxed mt-4 text-lg">
        Our app allows you to list up to 5 tasks, reorganize them using a
        seamless <em>drag and drop</em> feature, and mark them as completed to
        track your progress. To keep you inspired, we display motivational
        quotes every 10 seconds, ensuring you stay energized and focused
        throughout your day.
      </p>
      <p className="text-gray-800 leading-relaxed mt-4 text-lg">
        We also understand that prioritizing tasks can be overwhelming. That’s
        why <strong>Do-It-Now</strong> offers personalized guidance,
        highlighting the importance of balancing health, love, and professional
        fulfillment. Our goal is to help you achieve clarity and balance in all
        aspects of your life.
      </p>
      <p className="text-gray-800 leading-relaxed mt-4 text-lg">
        Join us on this journey to transform how you manage your time and goals.
        With <strong>Do-It-Now</strong>, staying organized becomes a motivating
        and fulfilling experience.
      </p>
    </motion.article>
  );
}
