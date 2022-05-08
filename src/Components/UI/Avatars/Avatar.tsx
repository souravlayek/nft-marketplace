import React from "react";
import Image, { ImageProps } from "next/image";
import styles from "./styles/avatar.module.scss";

interface Props extends ImageProps {
  size?: number;
  alt?: string;
  isActive?: boolean;
}

const Avatar = ({
  src,
  size = 40,
  alt = "profile image",
  isActive = false,
}: Props) => {
  return (
    <div className={styles.avatar}>
      <div style={{
        width: size,
        height: size
      }} className={`${styles.imageWrapper} ${isActive ? styles.activeAvatar: ''}`}>
        <Image
          src={src}
          width={size}
          height={size}
          objectFit="cover"
          alt={alt}
          layout="responsive"
        />
      </div>
      {isActive && <div className={styles.activeBadge} />}
    </div>
  );
};

export default Avatar;
