import { ProfileWithDetails,
  ContentHeading } from "Components";
import { NextArrowIcon, PreviousArrowIcon } from "Icons";
import React from "react";
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
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
          <ProfileWithDetails
            profileImage="/assets/images/people/p1.jpg"
            name="@xsullo"
            userType="SK NFTs sold"
            hasNotification={false}
          />
        </div>
        <div className={`${styles.scrollButton} ${styles.nextButton}`}>
          <NextArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
