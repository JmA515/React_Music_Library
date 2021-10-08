import React from 'react';
import './MusicTable.css'


const MusicTable = (props) => {
    return ( 
        <div className = "table">
            <table>
                <tbody>
                    <tr className = "table-header">
                        <th className = "table-header">Title</th>
                        <th className = "table-header">Artist</th>
                        <th className = "table-header">Album</th>
                        <th className = "table-header">Release Date</th>
                        <th className = "table-header">Genre</th>
                    </tr>
                    {props.makeTable()}
                </tbody>
            </table>
        </div>
     );
}
 
export default MusicTable;