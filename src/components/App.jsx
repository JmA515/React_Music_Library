import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable/MusicTable';
import AddSong from './AddSong/AddSong';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
            editingSong: undefined,
            searchTerm: '',
         }
    }

    componentDidMount () {
        this.getSongs();
    }

    async getSongs () {
        try {
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response.data);
            this.setState ({
                songs: response.data
            })
        }
        catch (ex) {
            alert('Error in API Call');
        }
    }

    addSong = (newSong) => {
        this.state.songs.push(newSong);
        this.setState({})
    }

    removeSong = (song) => {
        
        let url = `http://127.0.0.1:8000/music/${song.id}/`;
        axios.delete(url)
        .then(response => {
            console.log(response);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
        console.log(song.title);
        
        console.log(song)
        let tableCopy = this.state.songs.filter((_song) => _song.id !== song.id);
        this.setState({songs: tableCopy})
    }

    render() { 

        return ( 
            <div>
                <SearchBar songs = {this.state.songs} />
                <MusicTable songs = {this.state.songs} removeSong = {this.removeSong}/>
                <AddSong addSong = {this.addSong}/>
            </div>
         );
    }
}
 
export default App;