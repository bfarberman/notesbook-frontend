import { combineReducers } from 'redux'
import notebookReducer from './notebookReducer'

export default combineReducers({
    notebook: notebookReducer
})