import { StyleSheet } from "react-native";

const resuable = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginHorizontal: 20,
    },
    rowWithSpace: (justifyContent)=>({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justifyContent
    })
})

export default resuable