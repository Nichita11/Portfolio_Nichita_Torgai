"use client";
import {
  IconBrandReact,
  IconHourglassHigh,
  IconTriangleFilled,
  TablerIcon,
} from "@tabler/icons-react";
import Container, { ContainerSection } from "../layouts/Container";
import SectionHeader from "../layouts/SectionHeader";
import styles from "./Experience.module.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useTheme } from "../contextWrappers/ThemeContextWrapper";

const ExperienceCard = ({
  Icon,
  framework,
  workPosition,
  company,
  techArr,
  datePeriod,
}: {
  Icon: TablerIcon;
  framework?: string;
  workPosition?: string;
  company?: string;
  techArr?: string[];
  datePeriod?: string;
}) => {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <div className={styles.experienceCard} ref={ref}>
      <div className={styles.experienceCard__timeline}>
        <div
          className={classNames(styles.experienceCard__timeline__icon, {
            [styles.scale]: inView,
          })}
        >
          <Icon size={48} stroke={2} />
        </div>
      </div>
      {techArr && (
        <div
          // className={styles.experienceCard__card + " " + inView && styles.slide}
          className={classNames(styles.experienceCard__card, {
            [styles.slide]: inView,
          })}
        >
          <div className={styles.experienceCard__card__framework}>
            {framework}
          </div>
          <div className={styles.experienceCard__card__title}>
            {workPosition}
          </div>
          <div className={styles.experienceCard__card__subtitle}>{company}</div>
          <div className={styles.experienceCard__card__techContainer}>
            {techArr.map((el, key) => (
              <div
                key={key}
                className={styles.experienceCard__card__techContainer__text}
              >
                {el}
              </div>
            ))}
          </div>
          <div className={styles.experienceCard__card__date}>{datePeriod}</div>
          <IconTriangleFilled
            size={40}
            stroke={2}
            className={styles.experienceCard__card__triangle}
          />
        </div>
      )}
    </div>
  );
};

export default function Experience() {
  const theme = useTheme();

  return (
    <Container
      className={classNames(styles.experience, {
        [styles.experience__dark]: theme === "dark",
      })}
    >
      <ContainerSection className={styles.experience__flex}>
        <SectionHeader>Experience</SectionHeader>
        <ExperienceCard
          Icon={IconBrandReact}
          framework="React.js"
          workPosition="Student"
          company="Openclassrooms"
          techArr={[
            "Rest API",
            "Swagger.io",
            "React",
            "Wordpress",
            "Express.js",
            "JavaScript",
            "Node.js",
            "HTML",
            "CSS",
            "Sass",
            "TypeScript",
          ]}
          datePeriod="10.2023 - present"
        />
        <ExperienceCard Icon={IconHourglassHigh} />
      </ContainerSection>
    </Container>
  );
}
