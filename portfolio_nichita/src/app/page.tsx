import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layouts/Container";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />

      <About />

      <Projects />

      <Skills />

      <Experience />
    </div>
  );
}
