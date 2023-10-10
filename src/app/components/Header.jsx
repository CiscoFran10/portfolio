"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="grid gap-8 px-8 py-12 md:px-12 md:py-20 md:grid-cols-2 xl:grid-cols-[1fr_2fr]">
      <div>
        <h1>
          <span className="text-xl ">Thiago Rodrigues</span>
          <br />
          <em className="text-[--c-text-alt]">Desenvolvedor Front-end</em>
        </h1>

        <div className="flex items-center gap-4 mt-4">
          <Link
            className="hover:bg-[--c-accent] rounded-full p-1 bg-transparent border-2 border-transparent hover:border-[--c-accent] transition duration-300"
            href={"https://github.com/CiscoFran10"}
            target="_blank"
          >
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>

          <Link
            className="hover:bg-[--c-accent] rounded-full p-1 bg-transparent border-2 border-transparent hover:border-[--c-accent] transition duration-300"
            href={"mailto:fthiagorodrigues10@gmail.com"}
            target="_blank"
          >
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="max-w-[65ch] ">
        <div className="overflow-hidden">
          <motion.p
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-[--c-text-alt]"
          >
            Olá, eu sou o Thiago, um entusiasta apaixonado pelo universo da
            <em> tecnologia e design</em>. Sou um desenvolvedor com a missão de
            transformar ideias criativas em <em> experiências digitais</em>{" "}
            envolventes e intuitivas.
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-[--c-text-alt]"
          >
            Como um desenvolvedor com um olhar apurado para o design, tenho uma
            paixão por <em>minimalismo</em>, <em>designs elegantes</em> e uma
            profunda apreciação por
            <em> websites leves e simples.</em>
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-lg "
          >
            Bem-vindo ao Meu Mundo Digital!
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
