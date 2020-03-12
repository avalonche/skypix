import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Root from '../screens/Root';
import AddLink from '../screens/AddLink';
import Video from '../screens/VideoPlayerView';
import { Route } from './routes';

const Stack = createStackNavigator();

export default (): React.ReactElement => (
    <NavigationContainer>
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={Route.ROOT} component={Root}/>
            <Stack.Screen name={Route.ADD_LINK} component={AddLink}/>
            <Stack.Screen name={Route.VIDEO} component={Video}/>
        </Stack.Navigator>
    </NavigationContainer>
)