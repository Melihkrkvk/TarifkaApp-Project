import React from "react";
import { SafeAreaView, View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from './CategoryCard.style';

function CategoryCard({ category, onPress }) {
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: category.strCategoryThumb }} />
                    <View style={styles.inner_container}>
                        <Text style={styles.title}>{category.strCategory}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default CategoryCard;
