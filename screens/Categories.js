import React from 'react';
import {  
    FlatList, 
    StyleSheet, 
} from 'react-native';
import CategoryMeals from './CategoryMeals';
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { HeaderButton, Item } from 'react-navigation-header-buttons';
import  HeaderButtons  from '../components/HeaderButton';

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

Categories.navigationOptions = () => {
    return { 
        headerTitle: 'Meal Categories',
        headerLeft: () => {
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='Menu' iconName='ios-menu' onPress={()=>navigation.navigate({})} />
            </HeaderButtons>
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