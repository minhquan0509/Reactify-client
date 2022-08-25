import React, { useState, useEffect } from "react"
import SpotifyWebApi from 'spotify-web-api-node'
import { Routes, Route} from 'react-router-dom'
import MusicPlayer from "../components/MusicPlayer";
import useAuth from "../hooks/useAuth"
import Sidebar from "../components/Sidebar";
import Search from "./Search";
import Home from "./Home";

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
        // spotifyApi.getMe()
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
    }, [accessToken])

    return(
        <div style={{backgroundColor: '#121914', width: '100%'}} className="row m-0">
            <Sidebar />

            <Routes>
                <Route path="/" element={<Home setPlayingTrack={setPlayingTrack}/>} />
                <Route path="/search" element={<Search accessToken={accessToken} playingTrack={playingTrack} setPlayingTrack={setPlayingTrack} spotifyApi={spotifyApi}/>} />
            </Routes>
            <div><MusicPlayer accessToken={accessToken} id={playingTrack?.id}></MusicPlayer></div>
        </div>
    )
}