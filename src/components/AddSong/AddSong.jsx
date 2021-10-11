import axios from 'axios';
import React, { Component } from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            song: {
                title: '',
                artist: '',
                album: '',
                release_date: '',
                genre: '',
            }
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let createdSong = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
        }
        axios.post('http://127.0.0.1:8000/music/', createdSong)
        .then((response) => {
            console.log(response.data)
            this.props.addSong(response.data)
        }).catch((error) => {
            console.log(error)
            alert('There was a problem adding the song '  +error.message)
        });
    }
   
    render() { 
        return ( 
            <form onSubmit = {this.handleSubmit}>
                <label>Song Title</label>
                <input name = "title" onChange = {this.handleChange} value = {this.state.title}/>
                <label>Artist</label>
                <input name = "artist" onChange = {this.handleChange} value = {this.state.artist}/>
                <label>Album</label>
                <input name = "album" onChange = {this.handleChange} value = {this.state.album}/>
                <label>Release Date</label>
                <input name = "release_date" onChange = {this.handleChange} value = {this.state.release_date}/>
                <label>Genre</label>
                <input name = "genre" onChange = {this.handleChange} value = {this.state.genre}/>
                <button type = "submit">Add Song</button>
            </form>
         );
    }
}
 
export default AddSong;