import { Image, StyleSheet} from 'react-native'
import React from 'react'

const NetworkImage = ({ source, height, width, radius }) => {
    return (
        <Image
            source={{ uri: source }}
            // source={source}
            style={styles.image(height, width, radius)}
        />
    )
}

export default NetworkImage

const styles = StyleSheet.create({
    image: (height, width, radius) => ({
        height: height,
        width: width,
        borderRadius: radius,
        resizeMode: 'cover'
    })
})