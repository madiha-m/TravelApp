import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/them'

const ReusableBtn = ({ onPress, btnText, txtColor, width, backgroundColor, borderWidth, borderColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
        >
            <Text style={styles.btnText(txtColor)}>{btnText}</Text>
        </TouchableOpacity >
    )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: (txtColor) => ({
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: txtColor,
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,  
        borderWidth: borderWidth
    })
})