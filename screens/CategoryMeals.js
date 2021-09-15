import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealList from '../components/MealList'

const CategoryMeals = props => {

    const categoryId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return (
        <View>
            <MealList listData={displayedMeals} navigation={props.navigation} />
        </View>
    )
}

CategoryMeals.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMeals;