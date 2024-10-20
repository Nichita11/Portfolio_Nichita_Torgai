import Link from "next/link";
import styles from "./Footer.module.scss";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <Link
          href={"https://github.com/Nichita11"}
          className={styles.footer__links__link}
        >
          <IconBrandGithub size={36} />
        </Link>
        <Link
          href={"https://www.instagram.com/nikitatorgai"}
          className={styles.footer__links__link}
        >
          <IconBrandInstagram size={36} />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/nichitatorgai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          }
          className={styles.footer__links__link}
        >
          <IconBrandLinkedin size={36} />
        </Link>
      </div>
      <div>© Nichita Torgai</div>
    </footer>
  );
}
