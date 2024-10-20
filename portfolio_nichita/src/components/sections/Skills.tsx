import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandSass,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Container, { ContainerSection } from "../layouts/Container";
import SectionHeader from "../layouts/SectionHeader";
import styles from "./Skills.module.scss";

const TechArr = [
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandSass,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandRedux,
  IconBrandMongodb,
  IconBrandNodejs,
];

const TeachName = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Sass",
  "React",
  "Next.js",
  "Redux",
  "MongoDB",
  "Node.js",
];

export default function SKills() {
  return (
    <Container className={styles.skills}>
      <ContainerSection>
        <SectionHeader className={styles.skills__header}>Skills</SectionHeader>
        <div className={styles.skills__technologies}>
          {TechArr.map((Element, key) => (
            <div key={key} className={styles.skills__technologies__card}>
              <Element size={60} stroke={2} />
              <div>{TeachName[key]}</div>
            </div>
          ))}
        </div>
      </ContainerSection>
    </Container>
  );
}
