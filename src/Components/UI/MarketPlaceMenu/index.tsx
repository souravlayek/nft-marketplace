import { useRouter } from "next/router";
import React from "react";
import { MARKETPLACE_MENU } from "utils";
import MenuItem from "../MenuItem";
import MenuTitle from "../MenuTitle";

type Props = {};

const MarketPlaceMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div className="marketPlaceMenu">
      <MenuTitle title="Dashboard" />
        <div className="menuList">
          {MARKETPLACE_MENU.map(({ path, name, icon }) => (
            <MenuItem
              key={path}
              label={name}
              icon={icon}
              isActive={path === router.asPath}
            />
          ))}
        </div>
    </div>
  );
};

export default MarketPlaceMenu;
