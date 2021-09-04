import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

const MealTile = ({ meal, onSelectMeal }) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
                <View >
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{meal.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{meal.duration}m</Text>
                        <Text>{meal.complexity.toUpperCase()}</Text>
                        <Text>{meal.affordability.toUpperCase()}</Text>
                    </View>
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
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})

export default MealTile;
