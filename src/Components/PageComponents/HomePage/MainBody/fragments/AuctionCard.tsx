import { Button, GroupedAvatar } from "Components/UI";
import { HeartIcon } from "Icons";
import Image from "next/image";
import React from "react";
import { useCountDownTimer } from "utils";
import styles from "./styles/auctionCard.module.scss";

type Props = {};
const userList = [
  "/assets/images/people/p1.jpg",
  "/assets/images/people/p2.jpg",
  "/assets/images/people/p3.jpg",
  "/assets/images/people/p4.jpg",
]
const AuctionCard = (props: Props) => {
  const time = useCountDownTimer()

  return (
    <div className={styles.auctionCard}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/nfts/queen_nft.jpeg"
            alt="nft"
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </div>
        <div className={styles.likeButton}>
          <HeartIcon />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.name}>$RARE Rani</div>
        <div className={styles.userType}>@peterQuill</div>
      </div>
      <div className={styles.description}>
        1/1 variation edition of Polygon multi edition Night Realm World ArtDrop
        in collaboration with World of Women NFT. &quote;Midnight Ranis&quote;
        is a special piece created for the &quote;Night Realm&quote; world The
        soft glow of a phone is the strongest in the dark of night. I am very
        honored to be a part of this.. <span>Read more</span>
      </div>
      <div className={styles.auctionClock}>
        <div className={styles.title}>Auction Ends in</div>
        <div className={styles.clock}>
          <div className={styles.timeBox}>{time.h}h</div>
          <div className={styles.timeBox}>{time.m}m</div>
          <div className={styles.timeBox}>{time.s}s</div>
        </div>

      </div>
      <div className={styles.bidding}>
        <div className={styles.bidTitle}>Current bid</div>
        <div className={styles.biddingValue}>
          <div className={styles.sol}>23.45 <span>SOL</span></div>
          <div className={styles.usd}>7,856.32 <span>USD</span></div>
        </div>
      </div>

      <div className={styles.ownerList}>
        <div className={styles.groupedAvatar}>
          <GroupedAvatar userList={userList} />
        </div>
        <div className={styles.title}>
          @CloudKing
        </div>
      </div>
      <div className={styles.buttons}>
        <Button buttonType="secondary">View Artwork</Button>
        <Button>Place a bid</Button>
      </div>
    </div>
  );
};

export default AuctionCard;
