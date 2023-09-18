import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CompanyDetails = () => {
  const route = useRoute();
  const { item } = route.params;
  {
    console.log(item);
  }

  return (
    <View>
      <Text>CompanyDetails</Text>
    </View>
  );
};

export default CompanyDetails;
