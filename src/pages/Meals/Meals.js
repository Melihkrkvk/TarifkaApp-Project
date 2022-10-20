import React from "react";
import { FlatList, SafeAreaView, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import useFetch from "../../hooks/Fetch/useFetch";
import Config from 'react-native-config';
import MealsCard from '../../components/MealsCard';

function Meals({ navigation, route }) {
    const { ctgName } = route.params;
    const { data, loading, error } = useFetch(`${Config.API_MEALS}${ctgName}`);

    const handleRender = ({ item }) => <MealsCard title={item} onPress={() => handleSelect(item.idMeal)} />
    const handleSelect = (mealname) => navigation.navigate('DetailScreen', { mealname })

    if (loading) {
        return <ActivityIndicator size='large' />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SafeAreaView style={styles.bckgrnd}>
            <View>
                <FlatList data={data.meals} renderItem={handleRender} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bckgrnd: { backgroundColor: 'orange' }
});

export default Meals;