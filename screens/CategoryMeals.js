import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    Platform,
    FlatList
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealTile from '../components/MealTile'

const CategoryMeals = props => {

    const categoryId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0)

    const renderMeal = (itemData) => {
        return (
            <MealTile meal={itemData.item} />
        )
    }

    return (
    <View style={styles.screen}>
        <Text>The Category Meal Screen</Text>
        <Text>{selectedCategory.title}</Text>
        <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMeal} />
        <Button onPress={()=>{ props.navigation.navigate('MealDetail')}} title="Go To Details!"/>
    </View>)
}

CategoryMeals.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return { 
        headerTitle: selectedCategory.title,
    }   
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMeals