import React from 'react';
import './MusicTable.css'


const MusicTable = (props) => {
    const makeTable = () => {
        return  props.songs.map((song) => {
            const { title, artist, album, release_date, genre } = song
            return (
                <tr key={song.id}>
                    <td className = "table-row">{title}</td>
                    <td className = "table-row">{artist}</td>
                    <td className = "table-row">{album}</td>
                    <td className = "table-row">{release_date}</td>
                    <td className = "table-row">{genre}</td>
                    <td className = "table-row"><button href = "#" className = "btn btn-outline-danger button-row"  onClick={() => props.removeSong(song)}>Delete {song.title}</button></td>          
                </tr>
            )
        })
    }
    

    return ( 
        <div>
            <div className = "table table-responsive">
                <table>
                    <tbody>
                        <tr className = "table-header">
                            <th className = "table-header">Title</th>
                            <th className = "table-header">Artist</th>
                            <th className = "table-header">Album</th>
                            <th className = "table-header">Release Date</th>
                            <th className = "table-header">Genre</th>
                            <th className = "table-header">Delete Song</th>
                        </tr>
                        
                        {makeTable()}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default MusicTable;