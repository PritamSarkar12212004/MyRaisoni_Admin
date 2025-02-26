import { View, Text, Image } from "react-native";
import React from "react";
import SplashWraper from "@/src/wraper/SplashWraper";
import SplashHeader from "@/src/components/splash/header/SplashHeader";
import NextButton from "@/src/components/splash/button/NextButton";
import ImageConstant from "@/src/constant/ImageConstant";

const Splash3 = () => {
  return (
    <SplashWraper>
      <View className="w-full h-full flex items-center justify-between">
        <SplashHeader page="3" />
        <View className="flex-1 flex items-start w-full justify-center ">
          <Text className="text-4xl text-white tracking-widest font-extrabold">
            Guiding Light, Shaping Futures
          </Text>
          <Text className="text-lg text-white tracking-widest font-thin mt-5">
            A teacher’s wisdom is the seed that grows into a lifetime of
            knowledge.
          </Text>
          <View className="w-full flex items-center justify-center">
            <Image
              source={ImageConstant.Splash3}
              className="h-auto w-full "
              resizeMode="cover"
            />
          </View>
        </View>
        <NextButton path="" />
      </View>
    </SplashWraper>
  );
};

export default Splash3;
