import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import styles from './Details.style';

function Details({ title, onPress }) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: title.strMealThumb }} />
                <View style={styles.body_container}>
                    <Text style={styles.meal_name}>{title.strMeal}</Text>
                    <Text style={styles.meal_from}>{title.strArea}</Text>
                </View>
                <View style={styles.separator}></View>
                <Text style={styles.description}>{title.strInstructions}</Text>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.button_text}>Watch On YouTube</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};


export default Details;