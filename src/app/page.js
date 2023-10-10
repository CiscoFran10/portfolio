"use client";

import * as data from "../data.json";
import { motion } from "framer-motion";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <motion.ul
          className="grid gap-4 px-8 antialiased md:px-12 md:grid-cols-2 lg:grid-cols-3 "
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data.map((project, index) => (
            <motion.li key={index} variants={item}>
              <ProjectCard {...project} />
            </motion.li>
          ))}
        </motion.ul>
      </main>
    </>
  );
}
