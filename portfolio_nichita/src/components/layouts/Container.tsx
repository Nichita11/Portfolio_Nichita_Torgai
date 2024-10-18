import styles from "./Container.module.scss";
import classNames from "classnames";

export default function Container({
  className,
  element = "div",
  children,
}: {
  className?: string;
  element?: "main" | "nav" | "footer" | "div";
  children: React.ReactNode;
}) {
  const Tag = element;
  return (
    <Tag className={classNames(styles.container, className)}>{children}</Tag>
  );
}

export function ContainerSection({
  className,
  children,
  fullWidth,
}: {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={classNames(className, {
        [styles.sectionContainer_content]: !fullWidth,
        [styles.sectionContainer_fullWidth]: fullWidth,
      })}
    >
      {children}
    </div>
  );
}
