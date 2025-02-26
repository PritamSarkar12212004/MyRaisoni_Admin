import { View, Text, Image } from "react-native";
import React from "react";
import SplashWraper from "@/src/wraper/SplashWraper";
import SplashHeader from "@/src/components/splash/header/SplashHeader";
import NextButton from "@/src/components/splash/button/NextButton";
import ImageConstant from "@/src/constant/ImageConstant";

const Splash2 = () => {
  return (
    <SplashWraper>
      <View className="w-full h-full flex items-center justify-between">
        <SplashHeader page="2" />
        <View className="flex-1 flex items-start w-full justify-center ">
          <Text className="text-4xl text-white tracking-widest font-extrabold">
            Rooted in Knowledge, Growing Towards{" "}
            <Text className="text-yellow-400">S</Text>uccess!
          </Text>
          <Text className="text-lg text-white tracking-widest font-thin mt-5">
            Just like a tree, education lays strong roots, branches into wisdom,
            and flourishes into success.
          </Text>
          <View className="w-full flex">
            <Image
              source={ImageConstant.Splash2}
              className="h-auto w-full"
              resizeMode="contain"
            />
          </View>
        </View>
        <NextButton path="Splash3" />
      </View>
    </SplashWraper>
  );
};

export default Splash2;
