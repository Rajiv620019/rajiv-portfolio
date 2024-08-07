import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaHardHat,
  FaJava,
  FaPython,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiSolidity,
  SiMysql,
  SiGit,
  SiSpringboot,
  SiPostman,
  SiVercel,
  SiDocker,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiCloudflare,
  SiJavascript,
  SiReact,
  SiHibernate,
  SiGithub,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <SiJavascript key={2} />,
          <SiTypescript key={3} />,
          <SiSolidity key={44} />,
          <FaPython key={4} />,
          <FaJava key={5} />,
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          <SiReact key={6} />,
          <SiNextdotjs key={7} />,
          <SiNodedotjs key={8} />,
          <SiExpress key={9} />,
          <SiTailwindcss key={10} />,
        ],
      },

      {
        title: "Database",
        icons: [<SiMongodb key={11} />, <SiPostgresql key={12} />],
      },
      {
        title: "ORM",
        icons: [<SiPrisma key={13} />, <SiHibernate key={14} />],
      },
      {
        title: "Tools/Lib",
        icons: [
          <SiDocker key={45} />,
          <SiPostman key={46} />,
          <SiFigma key={50} />,
          <SiGit key={47} />,
          <SiGithub key={48} />,
          <SiVercel key={49} />,
          <SiNetlify key={49} />,
        ],
      },
      {
        title: "Cloud",
        icons: [<SiCloudflare key={15} />, <FaAws key={16} />],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Blockchain Developer - WNE3, Remote",
        stage: "July 2023 - December 2023",
      },
      {
        title:
          "Fullstack Developer - Intern - Lentera Technologies Pvt Ltd, Chennai, India",
        stage: "February 2023 - June 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "React - The Complete Guide (incl Hooks, React Router, Redux) - Udemy",
        stage: "2023",
      },
      {
        title:
          "Bachelors in Mechanical Engineering - Paavai Engineering College, Namakkal, Tamil Nadu, India",
        stage: "2016 - 2020",
      },
    ],
  },
];

import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">AI</span> &{" "}
            <span className="text-accent">Web 3.0</span> Enthusiast.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 years ago I decided to switch to the tech industry, since then{" "}
            {`I've `}
            learned a ton of things worked with startups, and collaborated on
            digital products for business and consumer use. I have built a bunch
            of projects in the Web 2 and in the web 3 space and I really love
            doing that.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div> */}
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects
                </div>
              </div>
              {/* courses */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Courses Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
