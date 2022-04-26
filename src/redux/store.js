import { configureStore } from '@reduxjs/toolkit'
import {todoReducer} from './reducers'

export default configureStore({
    
    reducer: {todo: todoReducer},
   },
   window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
)