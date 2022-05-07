import { useRouter } from "next/router";
import React from "react";
import { PROFILE_MENU } from "utils";
import MenuItem from "../MenuItem";
import MenuTitle from "../MenuTitle";

type Props = {};

const ProfileMenu = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <MenuTitle title="My Profile" />
      <div className="menuList">
        {PROFILE_MENU.map(({ path, name, icon }) => (
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

export default ProfileMenu;
