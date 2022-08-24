import axios from "axios";
import React, { useState, useEffect } from "react"
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from "../TrackSearchResult";


export default function Search({accessToken, playingTrack, setPlayingTrack, spotifyApi}){
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [lyrics, setLyrics] = useState('')

    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setSearch('')
    }

    console.log(searchResults)

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
            })
            )
        })

        return () => cancel = true
    }, [search, accessToken])

    return(
            <Container className="d-flex flex-column p-2 col"
                style={{height: '100vh'}}>
            <Form.Control 
            type="search"
            placeholder="Search Songs/ artists"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="searchBar"/>
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
            </Container>
    )
}