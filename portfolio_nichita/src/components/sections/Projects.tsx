"use client";
import Link from "next/link";
import Container, { ContainerSection } from "../layouts/Container";
import SectionHeader from "../layouts/SectionHeader";
import styles from "./Projects.module.scss";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useRef, useState } from "react";
import Modal from "../layouts/Modal";
import Image from "next/image";
import classNames from "classnames";

const project: {
  href: string;
  title: string;
  src: string;
  description: string;
  icon: string[];
}[] = [
  {
    href: "https://github.com/Nichita11/Projet_11_Frontend",
    title: "Argent Bank",
    src: "/argentbank.png",
    description: `Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire. Pour cela ils veulent changer complètement le design et les fonctionnalités  du site (la page d' accueil, la page de connexion et la page utilisateur.)
L’objectif de ce projet était de mettre en place le fron-end du site avec React en Utilisant la librarie Redux.js.`,
    icon: ["Typescript", "MongoDB", "Redux"],
  },
  {
    href: "https://github.com/Nichita11/Projet_8_Kasa",
    title: "Kasa",
    src: "/kasa.jpg",
    description:
      "Kasa est une entreprise de location d’appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France. Mon objectif c' était de développer l’ensemble de l’application avec React  et les routes avec React Router.",
    icon: ["React.js", "Sass", "React Router"],
  },
  {
    href: "https://github.com/Nichita11/projet_6",
    title: "Sophie Bluel",
    src: "/huiesosca.jpg",
    description: `Le site de Sophie nous montre son portfolio avec tous les projets qu' elle a fait, groupées par catégories différentes. Pour réaliser ce projet j' ai fait la page de Log-in fonctionnelle et j'ai  ajouté une modale pour pouvoir modifier son portfolio en ajoutant des nouveaux projets.`,
    icon: ["JavaScript", "HTML", "CSS", "JQuery"],
  },
];

export default function Projects() {
  const handlerRef = useRef<{
    toggleActive: () => void;
  }>(null);
  const [contentIndex, setContentIndex] = useState(0);
  // handlerRef.current?.toggleActive();
  // console.log(handlerRef);
  return (
    <Container className={styles.projects}>
      <ContainerSection>
        <SectionHeader>Projets</SectionHeader>
        <div className={styles.projects__content}>
          {project.map((el, key) => (
            <div
              key={key}
              className={styles.projects__content__card}
              onClick={() => {
                setContentIndex(key);
                handlerRef.current?.toggleActive();
              }}
            >
              <Image src={el.src} width={500} height={500} alt={el.src} />
              <div>{el.title}</div>
            </div>
          ))}
          {/* <div
            className={styles.projects__content__card}
            onClick={() => handlerRef.current?.toggleActive()}
          >
            <IconBrandGithub size={200} stroke={2} />
            <div>Modal</div>
          </div> */}
          <Modal handlerRef={handlerRef}>
            <div className={classNames(styles.projects__content__modal)}>
              <Image
                src={project[contentIndex].src}
                width={1920}
                height={1080}
                alt={project[contentIndex].src}
              />
              <div>{project[contentIndex].description}</div>
              <div>
                Technologies utilisées:
                {project[contentIndex].icon.map((el, key) => (
                  <div key={key}>{el}</div>
                ))}
                <Link
                  href={project[contentIndex].href}
                  className={styles.projects__content__modal__github}
                >
                  <IconBrandGithubFilled />
                </Link>
              </div>
            </div>
          </Modal>
        </div>
      </ContainerSection>
    </Container>
  );
}
