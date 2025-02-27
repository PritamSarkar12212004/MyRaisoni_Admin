import { View, Text } from "react-native";
import React from "react";
import MainScreenWraper from "@/src/wraper/MainScreenWraper";
import MainHeader from "@/src/components/main/header/MainHeader";
import MainAttandanceCard from "@/src/components/main/card/MainAttandanceCard";

const index = () => {
  return (
    <MainScreenWraper>
      <MainHeader />
      <View className="w-full flex-1 pt-5 flex ">
        <MainAttandanceCard />
      </View>
    </MainScreenWraper>
  );
};

export default index;
