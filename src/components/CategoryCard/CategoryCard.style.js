import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        margin: 8,
        backgroundColor: '#eceff1',
        flexDirection: 'row',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderWidth: 1,
        borderColor: 'gray',
    },
    inner_container: {
        justifyContent: 'center',
        marginLeft: 12,
    },
    title: {
        fontSize: 16,
    },
    img: {
        height: 75,
        width: 120,
        borderRadius: 10,

    },
});