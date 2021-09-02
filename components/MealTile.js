import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const MealTile = ({ meal, onSelectMeal }) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
                <View >
                    <View style={styles.mealRow}>
                        <Text>{meal.title}</Text>
                    </View>
                    <View></View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        margin: 15,

    }
})

export default MealTile;
