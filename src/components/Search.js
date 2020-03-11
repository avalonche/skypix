import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image,
    SafeAreaView,
    AsyncStorage,
} from 'react-native'

const {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'
import {getAll} from '../api/api'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            data: ''
        }
    }

    static navigationOptions = {
        headerVisible: false
    }

    componentDidMount() {
        this.retrieveData().then((value) => {
            data = JSON.parse(value)
            this.setState({data})
        }).catch(() => this.setState({ data: []}))
    }
    
    addLink = async () => {
        try {
            const {navigate} = this.props.navigation
            const data = this.state.data.push(this.state.text)
            const link = this.state.text
            this.setState({data: data})
            this.setState({text: ""})
            await AsyncStorage.setItem('LINKS', JSON.stringify(data));
            navigate('Video', {source: link})
        } catch (error) {
          // Error saving data
        }
      };

    retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('LINKS');
        if (value !== null) {
        // We have data!!  
            return value
            
        }
    } catch (error) {
        // Error retrieving data
    }
    };

    deleteData(){
        this.setState({text: '', data: ''})
    }
    _renderItem(item){
        const {navigate} = this.props.navigation
        return (
            <TouchableWithoutFeedback onPress={
                () => navigate('Details', {item: item})}
            >
                <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
            </TouchableWithoutFeedback>
        )
    }
    render(){
        const {goBack} = this.props.navigation
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Icon 
                        name="plus"
                        color="grey"
                        size={18}
                        style={styles.searchIcon}
                    />
                    <TextInput 
                        value={this.state.text}
                        onChangeText={(text) => this.setState({ text })}
                        style={styles.input}
                        placeholder="Add a SkyLink"
                        placeholderTextColor="grey"
                        keyboardAppearance="dark"
                        autoFocus={true}
                        onSubmitEditing={this.addLink}
                    />
                    {this.state.text ? 
                    <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                        <Icon 
                            name="times-circle"
                            color="grey"
                            size={18}
                            style={styles.iconInputClose}
                        />
                    </TouchableWithoutFeedback>
                    : null}
                    <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => goBack()}>
                        <View style={styles.containerButton}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList 
                        style={{marginHorizontal: 5}}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{marginTop: 5, marginLeft: 5}}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 15,
        zIndex: 1,
        backgroundColor:'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 5,
        right: 90,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        flex: 1,
        height: 30,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
        color: 'grey'
    },
    cancelButtonText: {
        color: 'white',
        paddingRight: 15,
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
})

export default Search