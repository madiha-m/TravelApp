import { View, F, Image } from 'react-native'
import React from 'react'
import styles from './slides.style'
import { HeightSpacer, ReusableBtn, ReusableText } from '../../components/index'
import { COLORS, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Slides = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View>
            {/* <Text>Hellkj</Text> */}
            <Image source={item.image} style={styles.image} />
            {/* Initially View craeted is as column*/}
            <View style={styles.stack}>
                <ReusableText
                    text={item.title}
                    fontFamily={'medium'}
                    size={SIZES.xxLarge}
                    color={COLORS.white}
                />
                <HeightSpacer height={40} />
                <ReusableBtn
                    onPress={() => navigation.navigate('Bottom')}
                    btnText={"Let's Go"}
                    txtColor={COLORS.white}
                    width={(SIZES.width - 50) / 2.2}
                    backgroundColor={COLORS.red}
                    borderColor={COLORS.red}
                    borderWidth={0}
                />

                {/* <HeightSpacer height={60} />
                <ReusableBtn
                    onPress={() => { }}
                    btnText={"check test btn"}
                    txtColor={COLORS.blue}
                    width={(SIZES.width - 50) / 2.2}
                    backgroundColor={COLORS.white}
                    borderColor={COLORS.blue}
                    borderWidth={2}
                /> */}
            </View>
        </View>
    )
}

export default Slides