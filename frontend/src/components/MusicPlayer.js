const MusicPlayer = () => {
    return (
        <div className='music-player'>
        <div className='music-img-container'>

        </div>                
        <h2 id='title'>Title</h2>
        <h3 id='artist'>Artist</h3>
        <audio src=''></audio>

        <div className='progress-container-music' id='progress-container-musioc'>
            <div className='progress' id='progress'></div>
            <div className='duration-wrap' id='duration-wrap'>
                <span id="current-time"></span>
                <span id="duration"></span>
            </div>
        </div>

        <div className='music-player-controls'>
            <i className="fas fa-backward" id="prev" title="Previous"></i>
            <i className="fas fa-play main-button" id="play" title="Play"></i>
            <i className="fas fa-forward" id="next" title="Next"></i>
        </div>
    </div> 
    )
}

export default MusicPlayer
