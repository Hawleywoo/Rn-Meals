import React from 'react'
import MealTile from './MealTile'
import {
    FlatList,
    StyleSheet,
    View,
    Text
} from 'react-native'

const MealList = props => {

    const renderMeal = itemData => {
        return (
            <MealTile
                meal={itemData.item}
                onSelectMeal={() =>
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            meal: itemData.item
                        }
                    })
                }
            />
        )
    }

    return (
        <>
        <View style={style.list} >
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeal}
                style={{ width: '100%' }}
            />
        </View>
        </>
    )
}

const style = StyleSheet.create({
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})

export default MealList;