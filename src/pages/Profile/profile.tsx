import React from "react";
import { Avatar } from "../../components/Avatar/avatar";
import { TProfile } from "../../types/responses/profile";
import styles from "./profile.module.scss";

const profile: TProfile = {
  id: "1",
  avatar:
    "https://photo3.wambacdn.net/30/81/76/1707671803/1707671905_huge.jpg?hash=hh5V-76OebMwzKvMtkoktA&expires=64060578000&updated=1481463877",
  firstName: "Игорь",
  lastName: "Лобода",
  middleName: "Андреевич",
  phone: "+7 (910) 123-53-10",
  city: "Нижний Новгород",
  age: "26",
  sex: "male",
};

export const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <div className={styles.avatar}>
          <Avatar src={profile.avatar} />
        </div>
        <div
          className={styles.title}
        >{`${profile.lastName} ${profile.firstName} ${profile.middleName}`}</div>
      </div>
    </div>
  );
};
