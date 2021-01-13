import { GET_NOTEBOOKS, GET_NOTEBOOK, ADD_NOTEBOOK, UPDATE_NOTEBOOK, DELETE_NOTEBOOK, SEARCH_NOTEBOOKS, SAVE_NOTEBOOK } from '../actions/types'

const initialState = {
    notebooks: [],
    notebook: {},
    allNotebooks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTEBOOKS:
            return {
                ...state,
                notebooks: action.payload, 
                allNotebooks: action.payload
            }
        
        case GET_NOTEBOOK:
            return {
                ...state,
                notebook: action.payload,
            }

        case ADD_NOTEBOOK:
            return {
                ...state,
                notebook: action.payload,
            }
                
        case UPDATE_NOTEBOOK:
            return {
                ...state,
                notebook: {...state.notebook, ...action.payload} 
            }
            
        case DELETE_NOTEBOOK:
                return {
                    ...state,
                    notebook: action.payload,
                }
                
        case SEARCH_NOTEBOOKS:
            return {
                ...state,
                notebooks: state.allNotebooks.filter(notebook => {
                    if (typeof notebook.artist != "string") {
                        return 
                    }    
                    return notebook.artist.toUpperCase().includes(action.payload.toUpperCase())
                })
            }


         
                


            
        case SAVE_NOTEBOOK:
            return {
                ...state,
                notebook: action.payload,
            }
                
        default:
            return {...state} 
    }
}