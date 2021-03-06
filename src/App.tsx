import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigation/Stack';
import getStore from './store'

const store = getStore();

export default () => {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    )
}