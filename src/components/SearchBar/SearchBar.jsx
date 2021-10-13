import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
         }
    }

    editSearchTerm = (event) => {
        this.setState({searchTerm: event.target.value})
      }
    
    dynamicSearch = (props) => {
        return props.songs.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }


    render() { 
        return ( 
            <div style = {{textAlign: 'center'}}>
                <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search under construction'/>
            </div>
        )}
}
 
export default SearchBar;