import React from 'react'
import { connect } from 'react-redux'
import { getNotebook, updateNotebook, deleteNotebook } from './actions/notebookActions'
import Form from './Form';

class Edit extends React.Component {

    componentDidMount() {
        const { id:notebookId } = this.props.match.params;

        this.props.dispatch(getNotebook(notebookId))
    }

    deleteNotebook = (id) => {
        this.props.dispatch(deleteNotebook(id))
            .then(resp => {
                if (resp.success) {
                    this.props.history.push('/');
                }
            });     
    }

    formChange = (e) => {
        this.props.dispatch(updateNotebook({
            [e.target.name]: e.target.value
        }))

    }

    render() {
        const {notebook} = this.props 
        if (notebook) {
            return (
                <React.Fragment>
                    <div key={notebook.id}>
                        <img alt="" src={notebook.image}/> 
                        <h3>Artist: {notebook.artist}</h3>
                        <h3>Album: {notebook.title}</h3>
                        <h3>Year: {notebook.year}</h3>
                        <h3>Notes: {notebook.text}</h3>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                const result = window.confirm("Are you sure?") 
                                if (result) {
                                    this.deleteNotebook(notebook.id)
                                }
                                
                            }}
                        >
                            Delete
                        </button>
                    </div>
            
                    <Form 
                        handleUpdate={() => alert(`notebook ${notebook.id} was updated`)} 
                        notebook={notebook} 
                        onChange={this.formChange} 
                    />
                </React.Fragment>
            )
        } else {
            return null
        }
    }

}


const mapStateToProps = state => ({
    notebook: state.notebook.notebook
});

export default connect(mapStateToProps)(Edit);