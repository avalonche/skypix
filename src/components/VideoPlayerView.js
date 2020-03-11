import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation-locker'

class VideoPlayerView extends Component {
    static navigationOptions = {
        headerVisible: false
    }
    componentWillMount(){
        Orientation.lockToLandscape()
    }
    _back(){
        const {goBack} = this.props.navigation
        Orientation.lockToPortrait()
        goBack()
    }
    render(){
        return (
            <View style={styles.container}>
                <VideoPlayer 
                    source={{uri: this.props.route.params.source}}
                    title={this.props.title}
                    onBack={() => this._back()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default VideoPlayerView