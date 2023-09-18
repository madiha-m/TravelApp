import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import resuable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";

const Recommendations = () => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingTop: 30, /* borderColor: "blue", borderWidth: 2 */ }}>
      <View
        style={[
          resuable.rowWithSpace("space-between"),
          {
            paddingBottom: 20,
            // borderColor: "#00000",
            // borderWidth: 2,
          },
        ]}
      >
        {/* <Text style={{ borderWidth: 1, borderColor: "gray" }}>abc</Text> */}
        <ReusableText
          text="Recommendations"
          fontFamily={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({});
