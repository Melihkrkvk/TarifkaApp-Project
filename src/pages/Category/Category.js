import React from "react";
import { SafeAreaView, View, Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useFetch from '../../hooks/Fetch/useFetch';
import Config from 'react-native-config';




function Category({ navigation }) {
    const { data, loading, error } = useFetch(Config.API_CATEGORIES);

    const renderCategorie = ({ item }) => (<CategoryCard category={item} onPress={() => handleSelect(item.strCategory)} />)

    const handleSelect = (ctgName) => { navigation.navigate('MealsScreen', { ctgName }) }

    if (loading) {
        return <ActivityIndicator size='large' />
    }
    if (error) {
        <Text>{error}</Text>
    }

    return (

        <SafeAreaView style={styles.backgrnd}>
            <View >
                <FlatList data={data.categories} renderItem={renderCategorie} />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgrnd: {
        backgroundColor: 'orange',

    }
});
export default Category;