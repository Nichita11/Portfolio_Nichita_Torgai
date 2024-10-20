import { useEffect, useState } from "react";
import styles from "./TextAnimation.module.scss";

export default function TextAnimation({
  text,
  delay,
  infinite,
  endDelay,
}: {
  text: string[];
  delay: number;
  infinite?: boolean;
  endDelay: number;
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [currentTextArrayIndex, setCurrentTextArrayIndex] = useState(0);

  useEffect(() => {
    if (reachedEnd) {
      setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        setCurrentIndex((prevIndex) => {
          if (prevIndex === 1) {
            setReachedEnd(false);
            setCurrentTextArrayIndex((prev) => {
              if (prev === text.length - 1) {
                return 0;
              }
              return prev + 1;
            });
          }
          return prevIndex - 1;
        });
      }, delay + (currentIndex === text[currentTextArrayIndex].length ? endDelay : 0));
    } else if (currentIndex < text[currentTextArrayIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(
          (prevText) => prevText + text[currentTextArrayIndex][currentIndex]
        );
        setCurrentIndex((prevIndex) => {
          if (prevIndex === text[currentTextArrayIndex].length - 1) {
            setReachedEnd(true);
          }
          return prevIndex + 1;
        });
      }, delay);

      return () => clearTimeout(timeout);
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
    }
  }, [currentIndex]);

  return (
    <div className={styles.textAnimation}>
      <div>{currentText}</div>
    </div>
  );
}
