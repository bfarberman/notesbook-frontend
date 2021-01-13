import React from 'react'
import {addNotebook, saveNotebook } from './actions/notebookActions'
import store from './store' 

const styles = {
    backgroundColor: "#E66453"
}

class Form extends React.Component {
    
    changeHandler = (e) => {
        this.props.onChange(e)
   }


   
    submitHandler = (e) => {
        e.preventDefault()

        if (this.props.notebook.id) {
            
            store.dispatch(saveNotebook(this.props.notebook))
                .then(() => this.props.handleUpdate());

            
            
        } else {
            
            store.dispatch(addNotebook(this.props.notebook))
                .then((notebook) => this.props.submitHandler(notebook))

            
        } 
    }

    render() {
            
        return (

            <div>
                <p></p>
                   <form onSubmit={this.submitHandler}> 
                       <input style= {styles} type="text" name="image" placeholder="album cover" value={this.props.notebook.image} onChange={this.changeHandler}/>
                       <p></p>
                       <input style= {styles} type="text" name="artist" placeholder="artist" value={this.props.notebook.artist} onChange={this.changeHandler}/>
                       <p></p>
                       <input style= {styles} type="text" name="title" placeholder="album title" value={this.props.notebook.title} onChange={this.changeHandler}/>
                       <p></p>
                       <input style= {styles} type="text" name="year" placeholder="year" value={this.props.notebook.year} onChange={this.changeHandler}/>
                       <p></p>
                       <input style= {styles} type="text" name="text" placeholder="notes" value={this.props.notebook.text} onChange={this.changeHandler}/> 
                       <p></p>
                       <input type="submit" value="Add NotesBook"/>
                   </form>
            </div>
        
     
        )

    }
    
}




export default Form