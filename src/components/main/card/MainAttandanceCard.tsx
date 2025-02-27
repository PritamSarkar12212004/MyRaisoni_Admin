import { View, Text } from "react-native";
import React from "react";
import ProgressRing from "../../ui/chart/ProgressRing";

const MainAttandanceCard = () => {
  return (
    <View className="w-full h-44 p-4 rounded-[25px] flex-row items-center justify-between bg-[#FECA1F]">
      <View className="flex gap-2">
        <Text className="text-3xl font-bold tracking-tight">
          Daily Attendance
        </Text>
        <Text className="text-xl font-bold tracking-tight">
          4/7 <Text className="font-normal">task completed</Text>
        </Text>
      </View>
      <View>
        <ProgressRing />
      </View>
    </View>
  );
};

export default MainAttandanceCard;
