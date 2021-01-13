import React from 'react'
import Form from './Form'
import Search from './Search'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types' 
import { getNotebooks, searchNotebooks } from './actions/notebookActions';

class NotebookContainer extends React.Component {

    state = {
        search: ""
    }

    componentDidMount() {
        this.props.dispatch(getNotebooks());
    } 

    handleSearch = (event) => {
        this.props.dispatch(searchNotebooks(event.target.value))
        let search = event.target.value
        this.setState({
            search
        })
    }


    render() {
        let notebooks = this.props.notebooks.map((notebook) => {
            return (
                <div key={notebook.id}>
                    <img alt="" src={notebook.image}/> 
                    <h3><Link to={`/notebooks/${notebook.id}`}>Artist: {notebook.artist}</Link></h3>
                    <h3>Album: {notebook.title}</h3>
                    <h3>Year: {notebook.year}</h3>
                    <h3>Notes: {notebook.text}</h3>
                </div>
            )
        })
    
    
        return (
            <div> 
                <Search 
                    search={this.state.search} 
                    handleSearch={this.handleSearch}
                />
            
                {notebooks}
            </div>
        )
    }
}

NotebookContainer.propTypes = {
    notebooks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    notebooks: state.notebook.notebooks 
})

export default connect(mapStateToProps)(NotebookContainer)
