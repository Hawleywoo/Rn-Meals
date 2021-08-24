import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'
import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'

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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: ''
        },
        headerTintColor: Platform.OS === 'android' ?  'white': Colors.primaryColor,
    }
})

export default createAppContainer(MealsNavigator);