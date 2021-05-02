const Playlist = () => {

    return (
        <div className='playlist'>
            <div className='search-list'>
                <input type='text' id='playlist-search' placeholder='Search'></input>
            </div>

            <div className='tracklist'>
                <ul className='music-list'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </ul>             
            </div>
        </div>
    )
}

export default Playlist
