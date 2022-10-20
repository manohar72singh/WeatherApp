import { createSlice } from "@reduxjs/toolkit";
import { weatherForecast } from "../Api";
const initialState={
    value:'',
    cityWeather:["hello"],
}

const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        setValue(){

        },
        setData(state, action)
        {
            state.cityWeather = action.payload;
        }
    }
})

export const {setData, setValue} = weatherSlice.actions;
export default weatherSlice.reducer;
//redux thunk

export const getCityWeather = (value)=>{
    return async function weatherFetch(dispatch, getState){
      try{
        const data = await fetch(weatherForecast(value))
        const result = await data.json();
        dispatch(setData(result));
      }
      catch(e){
        console.log(e);
      } 
        
    }

}

