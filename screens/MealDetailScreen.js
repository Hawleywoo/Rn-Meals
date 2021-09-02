import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetail = props => {
    const meal = props.navigation.getParam('meal')

    return (
    <View style={styles.screen}>
        <Text>The Meal Detail Screen</Text>
        <Text>{meal.title}</Text>
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetail;