import React from "react";
import { SafeAreaView, View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native";
import styles from './MealsCard.style';

function MealsCard({ title, onPress }) {
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    <ImageBackground style={styles.img} source={{ uri: title.strMealThumb }} >
                        <View style={styles.inner_container}>
                            <View style={styles.info_container}>
                                <Text style={styles.title}>{title.strMeal}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
};
export default MealsCard;