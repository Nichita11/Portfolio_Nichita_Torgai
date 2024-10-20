import classNames from "classnames";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={classNames(styles.header, className)}>{children}</h2>;
}
