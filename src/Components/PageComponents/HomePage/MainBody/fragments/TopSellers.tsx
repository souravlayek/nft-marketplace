import { ProfileWithDetails, ContentHeading } from "Components";
import { NextArrowIcon, PreviousArrowIcon } from "Icons";
import React, { useRef, useState } from "react";
import { TOP_SELLERS } from "utils";
import styles from "./styles/topSeller.module.scss";

type Props = {};


const TopSellers = (props: Props) => {
  const profileList = useRef<HTMLDivElement>(null);
  const [isLeftPresent, setIsLeftPresent] = useState(false)
  const [isRightPresent, setIsRightPresent] = useState(false)
  const scrollLittle = (element: HTMLDivElement | null, isLeft?: boolean) => {
    if (element) {
      const currentScrollPosition = element.scrollLeft;
      element.scroll({
        top: 0,
        left: currentScrollPosition + 100 * (isLeft ? -1 : 1),
        behavior: "smooth",
      });
      setIsLeftPresent(element.scrollLeft  !== 0)
      setIsRightPresent(element.scrollLeft  !== element.scrollWidth - element.clientWidth)
    }
  };
  return (
    <div className={styles.topSellers}>
      <ContentHeading title="Top Sellers" />
      <div className={styles.profiles}>
        {isLeftPresent && (
          <div
            onClick={() => {
              scrollLittle(profileList.current, true);
            }}
            className={`${styles.scrollButton} ${styles.prevButton}`}
          >
            <PreviousArrowIcon />
          </div>
        )}
        <div ref={profileList} className={styles.profileList}>
          {TOP_SELLERS.map((item) => (
            <ProfileWithDetails
              key={item.name}
              hasNotification={false}
              {...item}
            />
          ))}
        </div>
       {isRightPresent && <div
          onClick={() => {
            scrollLittle(profileList.current);
          }}
          className={`${styles.scrollButton} ${styles.nextButton}`}
        >
          <NextArrowIcon />
        </div>}
      </div>
    </div>
  );
};

export default TopSellers;
