import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data'

const Favorites = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    
    return (
    <View style={styles.screen}>
        <MealList listData={favMeals} navigation={props.navigation} />
    </View>)
}
Favorites.navigationOptions = {
    headerTitle: 'Your Favorites'
}

const styles = StyleSheet.create({

})

export default Favorites;