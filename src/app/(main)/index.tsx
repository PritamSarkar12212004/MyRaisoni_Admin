import { View, Text } from "react-native";
import React from "react";
import MainScreenWraper from "@/src/wraper/MainScreenWraper";
import MainHeader from "@/src/components/main/header/MainHeader";
import MainAttandanceCard from "@/src/components/main/card/MainAttandanceCard";
import ReviewCard from "@/src/components/main/card/ReviewCard";
import ReviewCardData from "@/src/demo/ReviewCardData";

const index = () => {
  return (
    <MainScreenWraper>
      <MainHeader />
      <View className="w-full flex-1 pt-5 gap-10 flex ">
        <MainAttandanceCard />
        <View className="w-full flex-row items-center justify-between flex-wrap">
          {ReviewCardData.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </View>
      </View>
    </MainScreenWraper>
  );
};

export default index;
