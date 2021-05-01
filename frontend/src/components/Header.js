const Header = (props) => {
    return (
        <header className='topnav'>
            <a href>Home</a>
            <a href>Equalizer</a>
            <a href>About</a>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Trackser',
}

export default Header
