import React from "react";
import styles from "./styles/button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: "primary" | "secondary";
}

const Button = ({ buttonType = "primary", children, ...props }: Props) => {
  return (
    <button
      className={
        buttonType === "primary" ? styles.primaryButton : styles.secondaryButton
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
