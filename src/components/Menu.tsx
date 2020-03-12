import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')

class Menu extends Component {
    render(){
        const { itemSelectedValue } = this.props
        return (
            <SafeAreaView style={styles.menu}>
                <ScrollView style={styles.scrollContainer}>
                    <TouchableOpacity
                        style={'Home' == itemSelectedValue ? [styles.textWithIcon, styles.itemSelected]: styles.textWithIcon}
                        onPress={() => this.props.itemSelected('Home')}
                    >
                        <View style={styles.withIcon}>
                            <Icon 
                                style={styles.iconWithText}
                                name="home"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.divider}/>
                    <TouchableOpacity
                        style={'Downloads' == itemSelectedValue ? [styles.textWithIcon, styles.itemSelected]: styles.textWithIcon}
                        onPress={() => this.props.itemSelected('Downloads')}
                    >
                        <View style={styles.withIcon}>
                            <Icon 
                                style={styles.iconWithText}
                                name="download"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>My Downloads</Text>
                        </View>
                        <Icon 
                            style={styles.rightIcon}
                            name="angle-right"
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                       style={'List' == itemSelectedValue ? [styles.textWithIcon, styles.itemSelected]: styles.textWithIcon}
                       onPress={() => this.props.itemSelected('List')}
                    >
                        <View style={styles.withIcon}>
                            <IonIcons 
                                style={styles.iconWithText}
                                name="md-checkmark"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <Icon 
                            style={styles.rightIcon}
                            name="angle-right"
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:"#191919"
    },
    divider: {
        flex: 1,
        height: 0,
        borderBottomColor: "#000",
        borderBottomWidth: 3,
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15,
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        paddingTop: 10,
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20,
    },
    itemSelected:{
        borderLeftWidth: 5,
        borderColor: 'red'
    },
})

export default Menu