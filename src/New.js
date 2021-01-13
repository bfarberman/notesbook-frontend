import React from 'react'
import Form from './Form'

const EMPTY_NOTEBOOK = {
    image: "",
    artist: "",
    title: "",
    year: "",
    text: ""
}

class New extends React.Component {

    state = {
        notebook: {...EMPTY_NOTEBOOK}
    }

    formChange = (e) => {
        this.setState({
            notebook: {
                ...this.state.notebook,
                [e.target.name]: e.target.value}  
        })
    }

    render() {

        return (
        <div>
                <Form 
                    submitHandler={(notebook) => this.props.history.push(`/notebooks/${notebook.id}`)}
                    notebook={this.state.notebook} 
                    onChange={this.formChange} 
                    />
        </div>
        )
    }
}

export default New