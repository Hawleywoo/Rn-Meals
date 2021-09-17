import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/Favorites'
import FiltersScreen from '../screens/Filters'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const defaultNavSetting = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,

}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: Categories,
    },
    CategoryMeals: {
        screen: CategoryMeals,
    },
    MealDetail: MealDetailScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: defaultNavSetting
})


const FavoriteNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, { 
    defaultNavigationOptions: defaultNavSetting
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorite!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor
        }
    }
}

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.secondaryColor
            }
        })

    const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
    })
    
    const mainNavigator = createDrawerNavigator({
        MealsFavs: {
            screen: MealsFavTabNavigator
        },
        Filters: {
            screen: FiltersNavigator
        }
    },{

    })

export default createAppContainer(MealsFavTabNavigator);