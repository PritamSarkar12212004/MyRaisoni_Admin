import { View, Text } from "react-native";
import React from "react";
import SubPageWraper from "@/src/wraper/SubPageWraper";
import SubPageHeader from "@/src/components/subpage/SubPageHeader";

const index = () => {
  return (
    <SubPageWraper>
      <SubPageHeader />
    </SubPageWraper>
  );
};

export default index;
