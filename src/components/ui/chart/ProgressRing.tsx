import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const ProgressRing = () => {
  const data = {
    labels: ["Swim"], // optional
    data: [0.4],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FECA1F",
    backgroundGradientTo: "#FECA1F",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // White color for contrast
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ProgressChart
      data={data}
      width={130}
      height={130}
      strokeWidth={16}
      radius={53}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
};

export default ProgressRing;
