import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './navigation'

import getStore from './store'

const store = getStore();

export default Index = () => {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    )
}
