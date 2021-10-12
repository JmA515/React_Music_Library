import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
         }
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    
    dynamicSearch = () => {
        return this.props.songs.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }



    render() { 
        return ( 
            <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
                <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a song'/>
            </div>
        )}
}
 
export default SearchBar;