import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/them"

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        width: SIZES.width,
        height: SIZES.height,
    },
    stack: {
        position: 'absolute',    //absolute allows to stack a component to another
        bottom: 0,   // right botton of the screen
        marginBottom: 60,
        marginHorizontal: 20 //space at left side
    }
})

export default styles   