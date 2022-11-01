import React, { createContext, useState } from "react";
import { ProfileDto } from "../../dto/profile";
import { TProfile } from "../../types/responses/profile";
import { ProfileForm } from "./components/Form/Profile/profile-form";
import { SettingsForm } from "./components/Form/Settings/settings-form";
import { ProfilePerson } from "./components/Person/profile-person";
import styles from "./profile.module.scss";
import { Tabs } from "../../components/Tabs/tabs";
import { ProfileTabsList } from "./profile.constants";
import { EProfileMenu } from "../../enums/profile-menu";

const profile: TProfile = {
  id: "1",
  avatar:
    "https://photo3.wambacdn.net/30/81/76/1707671803/1707671905_huge.jpg?hash=hh5V-76OebMwzKvMtkoktA&expires=64060578000&updated=1481463877",
  firstName: "Игорь",
  lastName: "Лобода",
  middleName: "Андреевич",
  phone: "+7 (910) 123-53-10",
  city: "Нижний Новгород",
  age: "16.08.1996",
  sex: "male",
  email: "russiancmo@gmail.com",
};

export const ProfileContext = createContext(ProfileDto.empty());
export const Profile = () => {
  const [activeTab, setActiveTab] = useState(EProfileMenu.MAIN);

  return (
    <ProfileContext.Provider value={ProfileDto.of(profile)}>
      <div className={styles.container}>
        <ProfilePerson />
        <div className={styles.main}>
          <Tabs
            list={ProfileTabsList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className={styles["forms-container"]}>
            {activeTab === EProfileMenu.MAIN && <ProfileForm />}
            {activeTab === EProfileMenu.SETTINGS && <SettingsForm />}
          </div>
        </div>
      </div>
    </ProfileContext.Provider>
  );
};
