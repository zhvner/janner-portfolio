import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import KazakhstanCanvas from "./canvas/Kazakhstan";
import RetroCanvas from "./canvas/Retro";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        From 🇰🇿 Kazakhstan to 🇨🇦 Canada, my journey has been like crafting a mosaic—blending math, data, and creativity into something meaningful. 🧩 
      </motion.p>



      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <div className='flex justify-center  items-center mt-5 h-[500px] w-full'>
        <KazakhstanCanvas/>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a full-ride Vantage Excellence scholar at UBC, I’ve built not just data pipelines and cloud solutions but also connections—mentoring peers, leading research, and shaping a vibrant tech community. 🎨💡
       
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Passionate about technology that drives positive change, I explore sustainability through data-driven solutions, whether optimizing cloud efficiency or tackling environmental challenges.
      </motion.p>

      <div className='flex justify-center  items-center mt-5 h-[400px] w-full'>
        <RetroCanvas/>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Now, as I seek Engineering roles for Summer and Fall 2025, I’m ready to design, build, and innovate—turning ideas into impactful, sustainable solutions. Let’s create something amazing together! 🚀
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
