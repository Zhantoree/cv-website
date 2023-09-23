import {combineReducers, configureStore} from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const rootReducer = combineReducers({
    root: rootSlice
})

const setupApp = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware(),
    })
}
export default setupApp