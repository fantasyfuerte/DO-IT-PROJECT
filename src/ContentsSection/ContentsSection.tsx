import VitalAreaCard from "@/ContentsSection/VitalAreaCard";
import {motion} from 'motion/react'

const vitalAreas = [
  {
    id: 1,
    title: "Health",
    route: "/health",
    background: "bg-green-950",
  },
  {
    id: 2,
    title: "Social",
    route: "/social",
    background: "bg-red-950",
  },
  {
    id: 3,
    title: "Thrive",
    route: "/thrive",
    background: "bg-purple-950",
  },
];

const ContentSection = () => {
  return (
    <motion.section initial={{opacity:0}} transition={{delay:.1}} whileInView={{opacity:1}} className="h-[84vh] mt-1 flex flex-col md:flex-row md:flex-wrap">
      {vitalAreas.map((area) => (
        <VitalAreaCard key={area.id} area={area} />
      ))}
    </motion.section>
  );
};
export default ContentSection;
