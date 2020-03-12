import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import SideMenu from 'react-native-side-menu';
import TextGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Menu from '../components/Menu.tsx';

const { width } = Dimensions.get('window');

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            itemSelected: 'Home'
        }
        this.itemSelected = this.itemSelected.bind(this)
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    itemSelected(item){
        this.setState({
            itemSelected: item,
            isOpen: false
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <SideMenu
                    menu={
                        <Menu
                            navigation={this.props.navigation}
                            itemSelected={this.itemSelected}
                            itemSelectedValue={this.state.itemSelected}
                        />
                    }
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{ flex: 1 }}
                >

                    <ScrollView style={[{ flex: 1 }, styles.container]}>
                        <SafeAreaView>
                            <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                            <View style={{ flex: 1 }}>
                                <View style={styles.videoContainer}>
                                    <Video
                                        resizeMode='cover'
                                        source={{ uri: "https://siasky.net/AADtpUd8ai11c6BNw9OgYZjPpl-ZG7MJ-Ou9Nqwk5h6QJA" }}
                                        style={styles.videoBackground}
                                        ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                                        onLoad={() => {
                                            this.videoPlayer.seek(1);
                                        }}
                                        paused
                                    />
                                    <View style={styles.buttonPlay}>
                                        <TouchableWithoutFeedback
                                            onPress={() => navigate('Video', { name: name })}
                                        >
                                            <View style={{ justifyContent: 'center' }}>
                                                <Icon
                                                    style={styles.iconPlay}
                                                    name="play-circle"
                                                    size={90}
                                                    color="white"
                                                />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                    <View style={styles.nameContainer}
                                        onLayout={({ nativeEvent }) => {
                                            this.setState({
                                                measuresTitle: nativeEvent.layout.y
                                            })
                                        }}
                                    >
                                        <TextGradient colors={['transparent', '#181818', '#181818']}>
                                            <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                                        </TextGradient>
                                    </View>
                                </View>
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    nameContainer: {
        backgroundColor: 'transparent'
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    videoContainer: {
        width: width,
        height: 300,
    },
    videoBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent',
        position: 'absolute',
        alignSelf: 'center',
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
})

export default connect(state => ({shows: state.shows}))(App)