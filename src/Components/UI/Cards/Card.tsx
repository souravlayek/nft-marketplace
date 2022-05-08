import { ProfileWithDetails } from "Components/Profile";
import { HeartIcon } from "Icons";
import Image from "next/image";
import React from "react";
import { Button } from "../Buttons";
import styles from "./styles/card.module.scss";

type Props = {
  nftImage: string;
  profileImage: string;
  name: string;
  user: string;
  solValue: number;
  usdValue: number;
};

const Card = ({
  nftImage,
profileImage,
name,
user,
solValue,
usdValue,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={nftImage}
            alt="nft"
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
        <div className={styles.clock}>12h: 43m: 10s</div>
        <div className={styles.likeButton}>
          <HeartIcon />
        </div>
      </div>
      <div className={styles.profile}>
        <ProfileWithDetails
          profileImage={profileImage}
          name={name}
          userType={user}
          hasNotification={false}
        />
      </div>
      <div className={styles.bidding}>
        <div className={styles.bidTitle}>Current bid</div>
        <div className={styles.biddingValue}>
          <div className={styles.sol}>{solValue} SOL</div>
          <div className={styles.usd}>{usdValue} USD</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button buttonType="secondary">View Artwork</Button>
        <Button>Place a bid</Button>
      </div>
    </div>
  );
};

export default Card;
