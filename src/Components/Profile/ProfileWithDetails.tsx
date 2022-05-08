import { Avatar } from "Components/UI";
import { NotificationIcon } from "Icons";
import React from "react";
import styles from "./styles/profileWithDetails.module.scss";
type Props = {
  hasNotification?: boolean;
  profileImage: string;
  name: string;
  userType: string;
  isActive?: boolean;
};

const ProfileWithDetails = ({
  hasNotification = true,
  profileImage,
  name,
  userType,
  isActive = false,
}: Props) => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.primaryDetails}>
        <div className={styles.avatar}>
          <Avatar src={profileImage} isActive={isActive} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.userType}>{userType}</p>
        </div>
      </div>
      {hasNotification && (
        <div className={styles.notificationIcon}>
          <NotificationIcon />
          <div className={styles.activeBadge} />
        </div>
      )}
    </div>
  );
};

export default ProfileWithDetails;
