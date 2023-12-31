import { View } from "react-native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, TEXT } from "../../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../../../components/index";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", item)}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          height={85}
          width={85}
          radius={12}
        />

        <HeightSpacer height={5} />

        <ReusableText
          text={item.country}
          fontFamily={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;

// const styles = StyleSheet.create({})
