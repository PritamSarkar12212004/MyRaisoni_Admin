import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundImg from "../constant/BackgroundImg";

const MainAuthWrapwr = ({ children }: any) => {
  return (
    <View className="w-full h-full flex  ">
      <View className="w-full flex h-[60vh]">
        <Image source={BackgroundImg.Login} className="w-full h-full" />
      </View>
      <SafeAreaView className="px-3 pt-3 pb-5 w-full flex-1">
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainAuthWrapwr;
