import { combineReducers } from 'redux';
import dataReducer from './dataReducer'
import showsReducer from './showsReducer'

export default function getRootReducer() {
    return combineReducers({
        data: dataReducer,
        shows: showsReducer
    })
}