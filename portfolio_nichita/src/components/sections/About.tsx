"use client";
import { IconTerminal2 } from "@tabler/icons-react";
import Container, { ContainerSection } from "../layouts/Container";
import SectionHeader from "../layouts/SectionHeader";
import styles from "./About.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useTheme } from "../contextWrappers/ThemeContextWrapper";

export default function About() {
  const theme = useTheme();

  return (
    <Container
      className={classNames(styles.about, {
        [styles.about_dark]: theme === "dark",
      })}
    >
      <ContainerSection>
        <SectionHeader>About me</SectionHeader>
        <div className={styles.about__content}>
          <div className={styles.about__content__imgCard}>
            <Image
              src={"/ebalaMea.png"}
              width={200}
              height={250}
              alt="profilePic"
            />
            <Image
              src={"/icon_react.png"}
              width={48}
              height={48}
              alt="reactLogo"
            />
          </div>
          <div className={styles.about__content__cmd}>
            <div className={styles.about__content__cmd__header}>
              <IconTerminal2 size={30} stroke={2} />
              <div className={styles.about__content__cmd__header__buttons}>
                <Image
                  src={"/icons_minimize.png"}
                  width={12}
                  height={12}
                  alt="minimize.png"
                />
                <Image
                  src={"/icons_maximaze.png"}
                  width={12}
                  height={12}
                  alt="maximize.png"
                />
                <Image
                  src={"/icons_close.png"}
                  width={12}
                  height={12}
                  alt="close.png"
                />
              </div>
            </div>
            <div className={styles.about__content__cmd__text}>
              <br />
              <p>C:\Users\nichitatorgai&gt;</p>
            </div>
          </div>
        </div>
      </ContainerSection>
    </Container>
  );
}
