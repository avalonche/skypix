import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from '../app'
import Search from '../components/Search'
import Details from '../components/Details'
import Video from '../components/VideoPlayerView'
import Genres from '../components/Genres'
import EpisodesPicker from '../components/EpisodesPicker'

const Stack = createStackNavigator();

export enum Route {
    HOME = 'Home',
    SEARCH = 'Search',
    DETAILS = 'Details',
    VIDEO = 'Video',
    GENRES = 'Genres',
    EPISODE_PICKER = 'Episode Picker',
}

export default (): React.ReactElement => (
    <NavigationContainer>
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={Route.HOME} component={App}/>
            <Stack.Screen name={Route.SEARCH} component={Search}/>
            <Stack.Screen name={Route.DETAILS} component={Details}/>
            <Stack.Screen name={Route.VIDEO} component={Video}/>
            <Stack.Screen name={Route.GENRES} component={Genres}/>
            <Stack.Screen name={Route.EPISODE_PICKER} component={EpisodesPicker}/>
        </Stack.Navigator>
    </NavigationContainer>
)