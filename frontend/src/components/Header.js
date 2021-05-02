import SearchBar from './Search';

const Header = () => {
    return (
        <header className='topnav'>
            <a href='home'>Home</a>
            <a href='equalizer'>Equalizer</a>
            <a href='about'>About</a>   
            <SearchBar />            
        </header>
    )
}

export default Header
