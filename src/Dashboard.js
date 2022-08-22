import axios from "axios";
import React, { useState, useEffect } from "react"
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from 'spotify-web-api-node'
import Logo from "./Logo";
import Player from "./Player";
import MusicPlayer from "./MusicPlayer";
import TrackSearchResult from "./TrackSearchResult";
import useAuth from "./useAuth"

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
});

export default function Dashboard({code}){
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();
    const [lyrics, setLyrics] = useState('')
    const accessToken = useAuth(code);

    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setSearch('')
    }

    useEffect(() => {
        if(!playingTrack) return
        
        axios.get('http://localhost:3001/lyrics',{
            params: {
                track: playingTrack.title,
                artist: playingTrack.artist
            }
        }).then(res => {
            console.log(res.data);
            setLyrics(res.data.lyrics)
        })
    }, [playingTrack])

    // console.log(searchResults)

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if(!search) return setSearchResults([]);
        if(!accessToken) return

        let cancel = false

        spotifyApi.searchTracks(search)
        .then(res => {
            console.log(res.body.tracks.items);
            if (cancel) return
            setSearchResults( res.body.tracks.items.map(track =>{
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if(image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    id: track.id,
                    albumUrl: smallestAlbumImage.url
                }
            })
            )
        })

        return () => cancel = true
    }, [search, accessToken])

    return(
        <div style={{backgroundColor: '#333'}}>
        <Container className="d-flex flex-column py-2"
            style={{height: '100vh'}}
        >
            <Logo />
            <Form.Control 
            type="search"
            placeholder="Search Songs/ artists"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{overflowY: 'auto'}}>
                {searchResults.map(track => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                ))}
                <div>
                    {searchResults.length === 0 && (
                        <div className="text-center rounded" style={{whiteSpace: "pre", color: '#fff', fontSize: '20px', fontWeight: '600'}}>
                            {lyrics}
                        </div>
                    )}
                </div>
            </div>
            <div><MusicPlayer accessToken={accessToken} id={playingTrack?.id}></MusicPlayer></div>
            {/* <div><Player accessToken={accessToken} trackUri={playingTrack?.uri} /></div> */}
        </Container>
        </div>
    )
}