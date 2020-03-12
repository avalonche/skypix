import React from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => {
    const {navigate} = props.navigation
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon 
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigate('Add Link')}>
            <Icon 
                name="plus"
                color="white"
                size={25}
            />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header