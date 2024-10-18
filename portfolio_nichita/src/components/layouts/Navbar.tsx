import Container, { ContainerSection } from "./Container";
import styles from "./Navbar.module.scss";
export default function Navbar() {
  return (
    <Container element="nav" className={styles.shadow}>
      <ContainerSection fullWidth className={styles.navbar}>
        <div>Home</div>
        <div>About me</div>
        <div>Projects</div>
        <div>Skills</div>
        <div>Experience</div>
      </ContainerSection>
    </Container>
  );
}
