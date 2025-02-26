import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import Logo from "../constant/Logo";
import AuthWraper from "../wraper/AuthWraper";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)");
    }, 1000);
  }, []);
  return (
    <AuthWraper>
      <View className="w-full h-full bg-black flex items-center justify-between py-10">
        <View></View>
        <Image
          source={Logo.MainLogo}
          className="w-80 h-80"
          resizeMode="cover"
        />
        <View className="w-full flex items-center justify-center">
          <Text className="text-2xl text-white font-semibold">
            My Raisoni Admin
          </Text>
        </View>
      </View>
    </AuthWraper>
  );
};

export default index;
