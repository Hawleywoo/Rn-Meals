import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    Platform
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoryMeals = props => {

    const categoryId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return (
    <View style={styles.screen}>
        <Text>The Category Meal Screen</Text>
        <Text>{selectedCategory.title}</Text>
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