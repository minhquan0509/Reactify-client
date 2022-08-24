import React, { useState, useEffect } from "react"
import SpotifyWebApi from 'spotify-web-api-node'
import { Routes, Route} from 'react-router-dom'
import MusicPlayer from "./MusicPlayer";
import useAuth from "./useAuth"
import Sidebar from "./Sidebar";
import Search from "./pages/Search";
import Home from "./pages/Home";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
});

export default function Dashboard({code}){
    const [playingTrack, setPlayingTrack] = useState();
    const accessToken = useAuth(code);

    // console.log(searchResults)

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    return(
        <div style={{backgroundColor: '#121914', width: '100%'}} className="row">
            <Sidebar />

            <Routes>
                <Route path="/" element={<Home setPlayingTrack={setPlayingTrack}/>} />
                <Route path="/search" element={<Search accessToken={accessToken} playingTrack={playingTrack} setPlayingTrack={setPlayingTrack} spotifyApi={spotifyApi}/>} />
            </Routes>
            <div><MusicPlayer accessToken={accessToken} id={playingTrack?.id}></MusicPlayer></div>
        </div>
    )
}