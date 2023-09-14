import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, TEXT } from '../../../constants/them'
import { NetworkImage, ReusableText } from '../../../components/index'

const Country = ({ item }) => {
    return (
        <TouchableOpacity>
            <View>
                <NetworkImage
                    source={item.imageUrl}
                    height={86}
                    width={86}
                    radius={12}
                />
                <ReusableText
                    text={item.country}
                    fontFamily={'medium'}
                    size={TEXT.medium}
                    color={COLORS.black}
                    align={'center'}
                />
            </View>
        </TouchableOpacity>
    )
}

export default Country

// const styles = StyleSheet.create({})