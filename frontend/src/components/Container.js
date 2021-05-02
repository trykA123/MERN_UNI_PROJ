import Playlist from './Playlist';
import MusicPlayer from './MusicPlayer';

const Container = () => {
    return (
        <div className='player-container'>
            <MusicPlayer />
            <Playlist />          
        </div>
    )
}

export default Container
