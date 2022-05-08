import React, { InputHTMLAttributes } from "react";
import styles from "./styles/input.module.scss"


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: React.HTMLInputTypeAttribute;
  value?: any;
  onChange?: React.ChangeEventHandler;
  hintText?: string;
};

const BaseInput = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  type = "text",
  value,
  onChange,
  hintText,
  ...props
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        {LeftIcon && (
          <div className={styles.leftIcon}>
            <LeftIcon />
          </div>
        )}
        <div className={styles.inputBox}>
          <input type={type} value={value} onChange={onChange} {...props} />
        </div>
        {RightIcon && <div className={styles.rightIcon}>
          <RightIcon />
        </div>}
      </div>
      {hintText && <div className={styles.hintText}>{hintText}</div>}
    </div>
  );
};

export default BaseInput;
