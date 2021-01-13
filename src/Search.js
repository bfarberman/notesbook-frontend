import React from 'react'

const styles = {
    backgroundColor: "rgb(78, 97, 202)"
}

const Search = (props) => {
    return (
        <form>
            <h1 style={styles} >Search By Artist</h1>
            <input type="text" placeholder="search" value={props.search} onChange={props.handleSearch} />
        </form>
    )
}

export default Search 