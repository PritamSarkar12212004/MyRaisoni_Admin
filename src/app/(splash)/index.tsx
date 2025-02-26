import { View, Text, Image } from "react-native";
import React from "react";
import SplashWraper from "@/src/wraper/SplashWraper";
import SplashHeader from "@/src/components/splash/header/SplashHeader";
import NextButton from "@/src/components/splash/button/NextButton";
import ImageConstant from "@/src/constant/ImageConstant";

const index = () => {
  return (
    <SplashWraper>
      <View className="w-full h-full flex items-center justify-between">
        <SplashHeader page="1" />
        <View className="flex-1 flex items-start w-full justify-center ">
          <View className="w-full flex">
            <Image
              source={ImageConstant.Splash1}
              className="h-auto w-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-5xl text-white tracking-widest font-extrabold">
            Wellcome To... <Text className="text-yellow-400">M</Text>y
            <Text className="text-yellow-400">R</Text>aisoni
          </Text>
          <Text className="text-lg text-white tracking-widest font-thin mt-5">
            Where Knowledge Meets Innovation
          </Text>
        </View>
        <NextButton path="Splash2" />
      </View>
    </SplashWraper>
  );
};

export default index;
