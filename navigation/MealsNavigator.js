import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import Categories from '../screens/Categories'
import CategoryMeal from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: Categories,
    CategoryMeals: {
        screen: CategoryMeal
    },
    MealDetail: MealDetailScreen
})

export default MealsNavigator