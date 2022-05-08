import { Button } from "Components/UI";
import Image from "next/image";
import React from "react";
import styles from "./styles/hero.module.scss";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.text}>
        <h1>
          Create your own <span>NFTs.</span>
          <br />
          Discover, collect and <br />
          sell them too!
        </h1>
        <div className={styles.buttons}>
          <Button>Discover now</Button>
          <Button buttonType="secondary">View artwork</Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/astranaut.png"
          alt="flying astronaut"
          layout="responsive"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Hero;
