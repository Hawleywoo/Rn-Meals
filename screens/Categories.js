import React from 'react';
import {  
    FlatList, 
    StyleSheet, 
} from 'react-native';
import CategoryMeals from './CategoryMeals';
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton  from '../components/HeaderButton';

const Categories = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', 
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} 
            />
        )
    }

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    )
}

Categories.navigationOptions = (navigationData) => {
    return { 
        headerTitle: 'Meal Categories',
        headerLeft: () => {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title='Menu' iconName='ios-menu' onPress={()=> navigationData.navigation.toggleDrawer()} />
                </HeaderButtons>)
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Categories;