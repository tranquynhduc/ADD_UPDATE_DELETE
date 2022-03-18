import { createStore } from 'redux'
import { rootReducer } from './component/redux';
export const store = createStore(rootReducer,)
