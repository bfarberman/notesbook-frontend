import { GET_NOTEBOOKS, GET_NOTEBOOK, ADD_NOTEBOOK, UPDATE_NOTEBOOK, DELETE_NOTEBOOK, SEARCH_NOTEBOOKS, SAVE_NOTEBOOK } from './types'

export const getNotebooks = () => {
    return async dispatch => {
        try {

            const res = await fetch('http://localhost:3000/notebooks')
            const data = await res.json()

            dispatch({
                type: GET_NOTEBOOKS,
                payload: data
            })
        } catch (e) { 
        }
    } 
}

export const getNotebook = (notebookId) => {
    return async dispatch => {
        
            return fetch(`http://localhost:3000/notebooks/${notebookId}`)
                .then(resp => resp.json())
                .then(notebook => {
                    dispatch({
                        type: GET_NOTEBOOK,
                        payload: notebook,
                    });
                })
   
    }
}

export const updateNotebook = (payload) => {
    return  {   
                type: UPDATE_NOTEBOOK,
                payload,
        }
    }

export const deleteNotebook = (id) => {
    return async dispatch => {
        return fetch(`http://localhost:3000/notebooks/${id}`, {
                method: 'DELETE'
            })
            .then(resp => resp.json())
             

    }
}

export const addNotebook = (notebookData) => {
    return async dispatch => {
        return fetch("http://localhost:3000/notebooks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(notebookData) 
        })
        .then(resp => resp.json())
        .then(notebook => {
            dispatch({
                type: ADD_NOTEBOOK,
                payload: notebook,
            });
            return notebook 
        })
    }
}

export const saveNotebook = (notebookData) => {
    return async dispatch => {
       fetch(`http://localhost:3000/notebooks/${notebookData.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(notebookData) 
            })
            .then(resp => resp.json())
            .then(notebook => {
                dispatch({
                    type: SAVE_NOTEBOOK,
                    payload: notebook,
                })
    })
    }}

export const searchNotebooks = (searchValue) => {
    return {
                type: SEARCH_NOTEBOOKS,
                payload: searchValue
    }
          
      
}