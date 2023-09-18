import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import resuable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";

const Recommendations = () => {
  const navigation = useNavigation();

  const recommendations = [
    {
      _id: "1",
      country_id: "1",
      title: "Olympic National Park, Washington",
      imageUrl:
        "https://www.myglobalviewpoint.com/wp-content/uploads/2023/05/Olympic-National-Park-Rainforest.jpg",
      rating: 4.9,
      review: "1204 Reviews",
    },
    {
      _id: "2",
      country_id: "1",
      title: "Multnomah Falls, Oregon",
      imageUrl:
        "https://www.myglobalviewpoint.com/wp-content/uploads/2019/01/Multnomah-Falls-Oregon.jpg",
      rating: 4.5,
      review: "1212 Reviews",
    },
    {
      _id: "3",
      country_id: "2",
      title: "Hunza Valley",
      imageUrl:
        "https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Hunza-Valley-undefinedGetty-CanvaPro.jpg",
      rating: 4.5,
      review: "1208 Reviews",
    },
    {
      _id: "4",
      country_id: "2",
      title: "SWAT VALLEY",
      imageUrl:
        "https://wander-lush.org/wp-content/uploads/2020/01/SwatValleyPakistanSAKhanPhotographyCanvaPro.jpg",
      rating: 4.7,
      review: "1232 Reviews",
    },
    {
      _id: "5",
      country_id: "2",
      title: "Passu Cones",
      imageUrl: "https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Passu-Cones-SiddiquiGetty-CanvaPro.jpg",
      rating: 3.9,
      review: "1298 Reviews",
    },
    {
      _id: "6",
      country_id: "3",
      title: "Rome",
      imageUrl: "https://www.planetware.com/wpimages/2019/05/italy-best-places-to-visit-rome-colosseum.jpg",
      rating: 4.7,
      review: "1233 Reviews",
    },
    {
      _id: "7",
      country_id: "3",
      title: "Florence",
      imageUrl: "https://www.planetware.com/photos-large/I/italy-best-places-to-visit-florence.jpg",
      rating: 4.4,
      review: "1323 Reviews",
    },
    {
      _id: "8",
      country_id: "3",
      title: "Venice",
      imageUrl: "https://www.planetware.com/photos-large/I/italy-best-places-to-visit-venice-canal.jpg",
      rating: 4.8,
      review: "1003 Reviews",
    },
    {
      _id: "9",
      country_id: "4",
      title: "Kabak Bay",
      imageUrl: "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/07/Kabak-Bay.jpg",
      rating: 4.7,
      review: "2313 Reviews",
    },
    {
      _id: "10",
      country_id: "4",
      title: "Butterfly Valley",
      imageUrl: "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/03/Butterfly-Valley_5th-jun.jpg",
      rating: 4.8,
      review: "1733 Reviews",
    },
    {
      _id: "11",
      country_id: "4",
      title: "Princes’ Island",
      imageUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Princes%E2%80%99-Island_7th-jun.jpg",
      rating: 4.7,
      review: "1654 Reviews",
    },
    {
      _id: "12",
      country_id: "5",
      title: "Stepantsminda",
      imageUrl: "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/ead1aa05_Kazbegi-.jpeg",
      rating: 4.7,
      review: "3333 Reviews",
    },
    {
      _id: "13",
      country_id: "5",
      title: "Vardzia",
      imageUrl: "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/122dcc94_Vardzia.jpeg",
      rating: 3.5,
      review: "1000 Reviews",
    },
  ];

  return (
    <View style={{ paddingTop: 30 /* borderColor: "blue", borderWidth: 2 */ }}>
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
