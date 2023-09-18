import { StyleSheet, View, VirtualizedList, Text } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { SIZES } from "../../constants/theme";
import { Country } from "../../components/index";

const Places = () => {
  const countries = [
    {
      _id: "1",
      country: "USA",
      description:
        "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles. Hollywood is famed for filmmaking.",
      imageUrl:
        "https://allmedical.com/wp-content/uploads/new-york-city-mental-health-jobs-1024x576.jpg",
      region: "North America, USA",
    },
    {
      _id: "2",
      country: "Pakistan",
      description:
        "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world fifth-most populous country, with a population of 241.5 million people, and has the world largest Muslim population as of year 2023.",
      imageUrl:
        "https://i.natgeofe.com/n/95e0a142-5cda-40e4-b89c-040f286da03f/kaghan-valley-swat-pakistan.jpg",
      region: "South Asia",
    },
    {
      _id: "3",
      country: "Italy",
      description:
        'Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschi Duomo; Venice, the city of canals; and Milan, Italy fashion capital.',
      imageUrl:
        "https://www.rivieratravel.co.uk/sites/default/files/assetbank/Getty961393138.Amalfi%20Coast.jpg",
      region: "South-Central Europe",
    },
    {
      _id: "4",
      country: "Turkia",
      description:
        "Turkey, officially the Republic of Türkiye, is a country located in the border of Southeast Europe and West Asia. It is mainly on the Anatolian Peninsula in West Asia, with a small portion called East Thrace on the Balkan Peninsula in Southeast Europe.",
      imageUrl:
        "https://www.seawolf-safari.de/photos/dive-sites/wrackTurkia-photo_lg.jpg",
      region: "Europe and Asia",
    },
    {
      _id: "5",
      country: "Georgia",
      description:
        "Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that’s home to Caucasus Mountain villages and Black Sea beaches. It’s famous for Vardzia, a sprawling cave monastery dating to the 12th century, and the ancient wine-growing region Kakheti. The capital, Tbilisi, is known for the diverse architecture and mazelike, cobblestone streets of its old town.",
      imageUrl:
        "https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/bneGeneric_Georgia_sulphur_baths_Tbilisi___Cropped_0.jpg",
      region: "Eastern Europe and West Asia",
    },
  ];
  return (
    <View>
      <HeightSpacer height={20} />

      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Country item={item} />
          </View>
        )}
      ></VirtualizedList>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
