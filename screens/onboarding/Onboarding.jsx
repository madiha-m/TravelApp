import { StyleSheet, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Slides from '../../components/Onboard/Slides'

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require('../../assets/images/malaysia.jpg'),
      title: "Find the Perfect place to stay"
    },
    {
      id: 2,
      image: require('../../assets/images/sideny.jpg'),
      title: "Discover the world"
    },
    {
      id: 3,
      image: require('../../assets/images/turkia.jpg'),
      title: "Find the best Hotels in the world"
    }
  ]
  return (
    // <h1>hello</h1>
    // <SafeAreaView>
    //   <Text>Onboarding</Text>
    // </SafeAreaView>
    // <SafeAreaView>
    //   <Text>
    //     hello text error
    //   </Text>
    // </SafeAreaView>
    <FlatList
      pagingEnabled                      //enable scroll from 1 page to anoter
      horizontal                         // hor or vert scrolling direction
      showsHorizontalScrollIndicator={false} //scroll indication
      data={slides}                     // data need to render
      ketExtrator={(item) => item.id}  // diffren objects 

      //render data to screen
      renderItem={({ item }) =>       //render the component here
        <Slides item={item} />
      }
    />
  )
}

export default Onboarding

// const styles = StyleSheet.create({})