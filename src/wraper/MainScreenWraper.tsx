import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { userContext } from "../context/ContextApi";

const MainScreenWraper = ({ children }: any) => {
  const { isModalVisible, setModalVisible } = userContext();
  const togalButton = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="w-full h-full flex pt-3 bg-[#21242C] ">
      <SafeAreaView className="px-4 ">
        <View style={{ flex: 1 }}>
          <Modal
            isVisible={isModalVisible}
            avoidKeyboard={false}
            animationIn={"fadeIn"}
            animationOut={"fadeOut"}
            onBackButtonPress={togalButton}
            onBackdropPress={togalButton}
          >
            <View className="w-full py-10 flex items-center gap-5 rounded-3xl   bg-white p-5  ">
              <View className="w-full flex items-center justify-center">
                <Image
                  source={{
                    uri: "https://i.pinimg.com/736x/9a/7b/40/9a7b4099d1a9d5ff523aa0ff4ea3536c.jpg",
                  }}
                  className="h-32 w-32 rounded-full"
                />
              </View>
              <View className="w-full flex items-center justify-center">
                <Text className="text-xl font-bold ">Pritam Sarkar</Text>
                <View className="mt-3">
                  <Text className="font-semibold text-lg">
                    Phone:7796419792
                  </Text>
                  <Text className="font-semibold text-lg text-wrap">
                    Email:pritam7796419792@gmail.com
                  </Text>
                  <Text className="font-semibold text-lg">
                    Referral:QNCE100
                  </Text>
                </View>
              </View>
              <View className="w-full flex-row items-center justify-between">
                <TouchableOpacity className="h-14 w-[45%] border-[1px] border-[#336DF6] rounded-2xl flex-row items-center justify-center gap-3">
                  <AntDesign name="sharealt" size={24} color="#336DF6" />
                  <Text className="text-xl font-semibold text-[#336DF6]">
                    Share
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-14 w-[45%] bg-[#336DF6] rounded-2xl flex-row items-center justify-center gap-3"
                  activeOpacity={0.8}
                  onPress={() => togalButton()}
                >
                  <Text className="text-xl font-semibold text-white">
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainScreenWraper;
