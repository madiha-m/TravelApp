import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import resuable from '../../components/Reusable/reusable.style'
import { HeightSpacer, Places, ReusableText } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={resuable.container}>
      <View>

        {/* View containing User anme and Search btn */}
        <View style={resuable.rowWithSpace('space-between')}>
          <ReusableText
            text={'Hey User!'}
            fontFamily={'regular'}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('Search')}
          >
            <AntDesign
              name='search1'
              size={26}
            />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        {/* Title of section + List of countries */}

        {/* Places section title Textbox */}
        <ReusableText
          text={'Places'}
          fontFamily={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />


        {/* Countries list > need to create a seprate component with name Places*/}
        <Places />

      </View>
    </SafeAreaView>
  )
}

export default Home

