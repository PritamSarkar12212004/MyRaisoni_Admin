import { View, Text } from "react-native";
import React from "react";
import MainScreenWraper from "@/src/wraper/MainScreenWraper";
import MainHeader from "@/src/components/main/header/MainHeader";

const Profile = () => {
  return (
    <MainScreenWraper>
      <MainHeader />
    </MainScreenWraper>
  );
};

export default Profile;
