import React from "react";
import { Hero, TopSellers, JustDropped, AuctionCard } from "./fragments";
import styles from "./styles/mainBody.module.scss";
type Props = {};

const MainBodyContent = (props: Props) => {
  return (
    <div className={styles.mainBodyWrapper}>
      <div className={styles.left}>
        <Hero />
        <TopSellers />
        <JustDropped />
      </div>
      <div className={styles.right}>
        <AuctionCard />
      </div>
    </div>
  );
};

export default MainBodyContent;
