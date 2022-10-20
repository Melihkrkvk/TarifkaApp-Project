import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from './pages/Category/Category';
import Meals from './pages/Meals/Meals';
import Detail from "./pages/Detail/Detail";

function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTintColor: 'orange' }}>
                <Stack.Screen options={{ title: 'Category', }} name="CategoryScreen" component={Category} />
                <Stack.Screen options={{ title: 'Meals', }} name="MealsScreen" component={Meals} />
                <Stack.Screen options={{ title: 'Detail', }} name="DetailScreen" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;