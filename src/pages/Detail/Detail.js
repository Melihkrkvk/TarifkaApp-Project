import React from "react";
import { SafeAreaView, View, FlatList, Linking, ActivityIndicator } from "react-native";
import useFetch from "../../hooks/Fetch/useFetch";
import Config from 'react-native-config';
import Details from "../../components/Detail/Details";

function Detail({ route }) {
    const { mealname } = route.params;
    const { data, loading, error } = useFetch(`${Config.API_DETAIL}${mealname}`)

    const handleRender = ({ item }) => <Details title={item} onPress={() => Linking.openURL(item.strYoutube)} />

    if (loading) {

        return <ActivityIndicator size='large' />

    }

    if (error) {
        return <Text>{error}</Text>
    }



    return (
        <SafeAreaView>
            <View>
                <FlatList data={data.meals} renderItem={handleRender} horizontal={false} />
            </View>
        </SafeAreaView>
    );
};



export default Detail;