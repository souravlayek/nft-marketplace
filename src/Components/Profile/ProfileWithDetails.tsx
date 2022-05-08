import { Avatar } from "Components/UI";
import { NotificationIcon } from "Icons";
import React from "react";
import styles from "./styles/profileWithDetails.module.scss";
type Props = {};

const ProfileWithDetails = (props: Props) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.primaryDetails}>
        <div className={styles.avatar}>
          <Avatar src="/assets/images/people/p5.jpg" />
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>Jem Patel</h3>
          <p className={styles.userType}>Pro Member</p>
        </div>
      </div>
      <div className={styles.notificationIcon}>
        <NotificationIcon />
        <div className={styles.activeBadge} />
      </div>
    </div>
  );
};

export default ProfileWithDetails;
