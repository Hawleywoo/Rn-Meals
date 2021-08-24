import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Categories from '../screens/Categories'
import CategoryMeals from '../screens/CategoryMeals'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: Categories,
    CategoryMeals: {
        screen: CategoryMeals
    },
    MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator);