import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable/MusicTable';
import AddSong from './AddSong/AddSong';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []

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

    makeTable = () => {
        return this.state.songs.map((song) => {
           const { title, artist, album, release_date, genre } = song
           return (
              <tr key={song.id}>
                 <td className = "table-row">{title}</td>
                 <td className = "table-row">{artist}</td>
                 <td className = "table-row">{album}</td>
                 <td className = "table-row">{release_date}</td>
                 <td className = "table-row">{genre}</td>
              </tr>
           )
        })
     }

    addSong = (newSong) => {
        this.state.songs.push(newSong);
        this.setState({})
    }

    render() { 
        return ( 
            <div>
                <MusicTable makeTable = {this.makeTable}/>
                <AddSong addSong = {this.addSong}/>
            </div>
         );
    }
}
 
export default App;