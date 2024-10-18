import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
