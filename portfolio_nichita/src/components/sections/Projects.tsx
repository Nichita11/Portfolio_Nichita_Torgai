import Link from "next/link";
import Container, { ContainerSection } from "../layouts/Container";
import SectionHeader from "../layouts/SectionHeader";
import styles from "./Projects.module.scss";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";

const project: { href: string; title: string }[] = [
  {
    href: "https://github.com/Nichita11/Projet_11_Frontend",
    title: "Argent Bank",
  },
  {
    href: "https://github.com/Nichita11/Projet_8_Kasa",
    title: "Kasa",
  },
  {
    href: "https://github.com/Nichita11/projet_6",
    title: "Sophie Bluel",
  },
];

export default function Projects() {
  return (
    <Container className={styles.projects}>
      <ContainerSection>
        <SectionHeader>Projets</SectionHeader>
        <div className={styles.projects__content}>
          {project.map((el, key) => (
            <Link
              key={key}
              className={styles.projects__content__card}
              href={el.href}
            >
              <IconBrandGithub size={200} stroke={2} />
              <div>{el.title}</div>
            </Link>
          ))}
        </div>
      </ContainerSection>
    </Container>
  );
}
