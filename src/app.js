import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import TextGradient from 'react-native-linear-gradient'
import Video from 'react-native-video';
import { connect } from 'react-redux'

import Header from './components/Header'
import List from './components/List'
import Menu from './components/Menu'
import Slide from './components/Slider'
import Genres from './components/Genres'

import SideMenu from 'react-native-side-menu'
import { SafeAreaView } from 'react-native-safe-area-context'
const {width, height} = Dimensions.get('window')
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            itemSelected: 'Home'
        }
        this.getTwoRows = this.getTwoRows.bind(this)
        this.itemSelected = this.itemSelected.bind(this)
    }

    navigationOptions = {
        header: null,  
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

    getTwoRows(){
        const {shows} = this.props
        const array = shows.slice(0)
        const val = Math.floor(array.length / 2)
        const newArray = array.splice(0, val)
        return [
            array,
            newArray
        ]
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <SideMenu
                    menu={<Menu 
                        navigation={this.props.navigation}
                        itemSelected={this.itemSelected} 
                        itemSelectedValue={this.state.itemSelected}
                    />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{flex: 1}}
                >
                    
                    <ScrollView style={[{flex: 1}, styles.container]}>

                        <SafeAreaView>
                            <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                            {this.state.itemSelected == 'Home' ? <View style={{flex: 1}}>

                            <View style={{width: width, height: 300}}>
                            <Video
                                resizeMode='cover'
                                source={{uri: "https://siasky.net/AADtpUd8ai11c6BNw9OgYZjPpl-ZG7MJ-Ou9Nqwk5h6QJA"}}
                                style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                                ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                                onLoad={() => {
                                  this.videoPlayer.seek(1);
                                }}
                                paused
                            />
                        <View style={styles.buttonPlay}>
                            <TouchableWithoutFeedback
                                onPress={() => navigate('Video', {name: name})}
                            >
                                <View style={{justifyContent: 'center'}}>
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
                            onLayout={({nativeEvent}) => {
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
                        
                    
                                <List
                                    getTwoRows={this.getTwoRows} 
                                    navigation={this.props.navigation}
                                />
                                </View>
                            : null}
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
    header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },
    headerText: {
        color: 'white',
        fontSize: 20
    },
    headerWithIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconDown: {
        marginLeft: 5
    },
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 300,
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
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons: {
       flexDirection: 'row',
       marginVertical: 30 
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    }
})

export default connect(state => ({shows: state.shows}))(App)