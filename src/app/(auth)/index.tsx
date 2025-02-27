import { View, Text } from "react-native";
import React from "react";
import MainAuthWrapwr from "@/src/wraper/MainAuthWrapwr";
import LoginButton from "@/src/components/auth/LoginButton";
import ConditionPage from "@/src/components/auth/ConditionPage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
const index = () => {
  return (
    <MainAuthWrapwr>
      <View className="w-full h-full  flex items-center justify-end gap-4">
        <View className="w-full flex items-center justify-center">
          <View>
            <Text className="text-2xl font-semibold tracking-widest">
              StartYour App
            </Text>
            <Text className="text-2xl font-semibold tracking-widest">
              Joining Today!
            </Text>
          </View>
          <View className="flex-row gap-4">
            <View className="w-24 h-24 bg-zinc-100 flex items-center justify-center">
              <MaterialIcons
                name="admin-panel-settings"
                size={30}
                color="gray"
              />
              <Text className="text-sm text-zinc-500">control data</Text>
            </View>
            <View className="w-24 h-24 bg-zinc-100 flex items-center justify-center">
              <FontAwesome5 name="smile-beam" size={30} color="gray" />
              <Text className="text-sm text-zinc-500">best response</Text>
            </View>
            <View className="w-24 h-24 bg-zinc-100 flex items-center justify-center">
              <Entypo name="lock" size={30} color="gray" />
              <Text className="text-sm text-zinc-500">secure data</Text>
            </View>
          </View>
        </View>
        <LoginButton />
        <ConditionPage />
      </View>
    </MainAuthWrapwr>
  );
};

export default index;
