import { MarketPlaceMenu, MenuItem, ProfileMenu, TopBar } from "Components";
import { LogoutIcon } from "Icons";
import React from "react";
import styles from "./styles/layout.module.scss";
type Props = {
  children: ReactNode;
};
const MyLayout = (props: Props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <span>THE NFT</span>
          <span>PLAYGROUND</span>
        </div>
        <div className={styles.menu}>
          <div className={styles.marketPlaceMenu}>
          <MarketPlaceMenu />
          </div>
          <div className={styles.profileMenu}>
            <ProfileMenu />
          </div>
        </div>
        <div className={styles.logoutButton}>
          <MenuItem label="Disconnect" icon={LogoutIcon} />
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.topBar}>
          <TopBar />
        </div>
        <div className={styles.content}>{props.children}</div>
      </main>
    </div>
  );
};

export default MyLayout;
