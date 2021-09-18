import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const Favorites = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    
    return (
    <View style={styles.screen}>
        <MealList listData={favMeals} navigation={props.navigation} />
    </View>
    )
}

Favorites.navigationOptions = (navigationData) => {
    return { 
        headerTitle: 'Your Favorites',
        headerLeft: () => {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title='Menu' iconName='ios-menu' onPress={()=> navigationData.navigation.toggleDrawer()} />
                </HeaderButtons>)
            }
    }
    
}

const styles = StyleSheet.create({

})

export default Favorites;