import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
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

MealDetail.navigationOptions = (navigationData) => {
    const meal = navigationData.navigation.getParam('meal')
    return {
        headerTitle: meal.title,
        headerRight: () => {
            return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Favorite" 
                    iconName='ios-star'
                    onPress={() => {
                        console.log('Mark as Favorite!')
                    }}
                />
            </HeaderButtons>)
        }
    }
}
export default MealDetail;