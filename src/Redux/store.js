import {configureStore} from '@reduxjs/toolkit'
import weatherReducer from './weatherSlics'

const stroe = configureStore({
    reducer:{
       weather: weatherReducer,
    }
}) 

export default stroe;