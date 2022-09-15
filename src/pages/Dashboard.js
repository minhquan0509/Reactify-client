import React, { useState, useEffect } from "react"
import SpotifyWebApi from 'spotify-web-api-node'
import { Routes, Route} from 'react-router-dom'
import MusicPlayer from "../components/MusicPlayer";
import useAuth from "../hooks/useAuth"
import Sidebar from "../components/Sidebar";
import Search from "./Search";
import Home from "./Home";
import { reducerCases } from "../utils/constants";
import { useStateProvider } from '../utils/StateProvider';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
});

export default function Dashboard({code}){
    const [playingTrack, setPlayingTrack] = useState();
    // const [topTracks, setTopTracks] = useState([])
    const [{ token }, dispatch] = useStateProvider();
    const accessToken = useAuth(code);
    const [userPlayLists, setUserPlayLists] = useState([]);

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.getMyTopTracks()
        .then(res => {
            const topTracks = res.body.items.map(track =>{
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if(image.height > smallest.height) return image
                    return smallest
                }, track.album.images[0])
    
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    id: track.id,
                    albumUrl: smallestAlbumImage.url
                }
            }).slice(0, 6)
            console.log(topTracks);
            dispatch({ type: reducerCases.SET_TOP_TRACKS, topTracks})
        })
        
        spotifyApi.getUserPlaylists('21wgqpwvjhby22dc5vxsbbnwa')
        .then(res => {
            // console.log(res.body.items);
            setUserPlayLists(res.body.items.map(playlist => {
                return playlist.name
            }))
        })
    }, [accessToken])

    return(
        <div style={{backgroundColor: '#121914', width: '100%'}} className="row m-0">
            <Sidebar userPlayLists={userPlayLists}/>

            <Routes>
                <Route path="/" element={<Home setPlayingTrack={setPlayingTrack}/>} />
                <Route path="/search" element={<Search accessToken={accessToken} playingTrack={playingTrack} setPlayingTrack={setPlayingTrack} spotifyApi={spotifyApi}/>} />
            </Routes>
            <div><MusicPlayer accessToken={accessToken} id={playingTrack?.id}></MusicPlayer></div>
        </div>
    )
}