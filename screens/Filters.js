import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Filters = props => {
    return (
        <View style={ styles.screen }>
            <Text>The Filter Screen</Text>
        </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

Filters.navigationOptions = ({
    headerTitle: 'Filter Screen'
})

export default Filters;