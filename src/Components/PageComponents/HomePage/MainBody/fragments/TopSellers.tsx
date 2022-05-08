import { ProfileWithDetails,
  ContentHeading } from "Components";
import { NextArrowIcon, PreviousArrowIcon } from "Icons";
import React from "react";
import { TOP_SELLERS } from "utils";
import styles from "./styles/topSeller.module.scss";

type Props = {};

const TopSellers = (props: Props) => {
  return (
    <div className={styles.topSellers}>
      <ContentHeading title="Top Sellers" />
      <div className={styles.profiles}>
        <div className={`${styles.scrollButton} ${styles.prevButton}`}>
          <PreviousArrowIcon />
        </div>
        <div className={styles.profileList}>
          {TOP_SELLERS.map((item,index) => <ProfileWithDetails
          key={item.name}
            hasNotification={false}
            {...item}
          />)}
        </div>
        <div className={`${styles.scrollButton} ${styles.nextButton}`}>
          <NextArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
