import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faBook, faSquarePlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from "./Logo";

export default function Sidebar({userPlayLists}){
    console.log(userPlayLists);
    return (
        <div className="col-2 d-flex flex-column px-4 py-2" style={{backgroundColor: 'black' ,height: '100vh'}}>
                <Logo />

                <ul className="d-flex flex-column p-0 nav">
                    <li className="nav-item">
                        <Link className="link" to="/">
                            <FontAwesomeIcon icon={faHouse} className="nav-icon" />
                            <span>Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/search" >
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon"/>
                            <span>Search</span></Link> 
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/" >
                            <FontAwesomeIcon icon={faBook} className="nav-icon"/>
                            <span>Library</span></Link>
                    </li>
                </ul>

                <ul className="d-flex flex-column p-0 mt-4 nav">
                    <li className="nav-item">
                        <Link className="link" to="/">
                            <FontAwesomeIcon icon={faSquarePlus} className="nav-icon" />
                            <span>Create Playlist</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="link">
                        <FontAwesomeIcon icon={faHeart} className="nav-icon" />
                            <span>Liked Songs</span></Link>
                    </li>
                </ul>

                <hr className='link'/>

                <ul className="d-flex flex-column p-0 nav">
                    {userPlayLists.map(playlist => (
                        <li className="nav-item link nav-playlist">{playlist}</li>
                    ))}
                </ul>
            </div>
    )
}