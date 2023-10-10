import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const ProjectCard = ({ link, title, image }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link
      className="group block relative w-full h-full aspect-square bg-[--c-bg-alt] rounded-md"
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute transition duration-300 opacity-0 pointer-events-none -inset-px rounded-xl group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--c-accent),
              transparent 80%
            )
          `,
        }}
      />

      <figure className="absolute inset-0 grid grid-rows-[1fr_auto]">
        <Image
          width={320}
          height={200}
          className="w-3/4 h-auto m-auto rounded-md shadow-[rgba(149,157,165,.2)0_8px_24px] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]"
          src={image}
          alt={`Foto da tela inicial do projeto ${title}`}
        />
        <figcaption className="block px-8 py-6">{title}</figcaption>
      </figure>
    </Link>
  );
};

export default ProjectCard;
