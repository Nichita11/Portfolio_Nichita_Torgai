import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

export default function Modal({
  handlerRef,
  children,
}: {
  handlerRef: MutableRefObject<{
    toggleActive: () => void;
  }|null>;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  const toggleActive = () => {
    if (ref.current) {
      ref.current.showModal();
    }
  };

  useEffect(() => {
    console.log(ref);
    handlerRef.current = {
      toggleActive,
    };
    return () => {
      handlerRef.current = null;
    };
  }, []);

  return (
    <dialog
      className={styles.modal}
      ref={ref}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
    >
      {children}
    </dialog>
  );
}
