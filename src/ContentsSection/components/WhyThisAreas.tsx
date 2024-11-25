import {motion} from 'motion/react'

const WhyThisAreas = () =>{
    return <article className="px-6 mt-16 h-[80vh]">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl text-center font-semibold mb-3"
      transition={{ delay: 0.35 }}
    >
      Why this 3 areas
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="text-gray-950 text-xl mt:m-8 mt-12 text-center md:text-pretty"
    >
      These three areas are fundamental to a fulfilling and balanced life,
      and are inextricably linked. They don't exist in isolation; instead,
      they inf8uence and support each other in a complex interplay.
      <br />
      Improvements in one area often create a positive ripple effect,
      boosting progress in the others.
      <br />A holistic strategy that acknowledges and addresses the
      synergistic relationships between these three key areas is the most
      effective path towards sustainable and comprehensive well-being.
    </motion.p>
  </article>
}

export default WhyThisAreas