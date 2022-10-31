import React, { useContext, useRef } from "react";
import { Avatar } from "../../../../components/Avatar/avatar";
import Icon from "../../../../components/Icon";
import { ProfileContext } from "../../profile";
import { useHover } from "../../../../hooks/app/useHover";
import cn from "classnames";
import styles from "./profile-person.module.scss";
import { ProfileAddAvatar } from "../Form/AddAvatar/profile-add-avatar";

export const ProfilePerson = () => {
  const profile = useContext(ProfileContext);
  const addAvatarRef = useRef<HTMLInputElement>(null);
  const { ref: avatarRef, value: isAvatarHovered } = useHover();

  return (
    <div className={styles.person}>
      <div
        className={styles.avatar}
        ref={avatarRef}
        onClick={() => addAvatarRef.current?.click()}
      >
        <Avatar src={profile.avatar} isOverlay={isAvatarHovered} />
        <div
          className={cn(
            styles["avatar__change-icon"],
            !isAvatarHovered && styles["avatar__change-icon_display_none"]
          )}
        >
          <Icon type="icon-plus" width={80} stroke="#ffffff" />
        </div>
      </div>
      <div
        className={styles.title}
      >{`${profile.lastName} ${profile.firstName} ${profile.middleName}`}</div>
      <ProfileAddAvatar ref={addAvatarRef} />
    </div>
  );
};
