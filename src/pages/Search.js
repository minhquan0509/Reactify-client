import axios from "axios";
import React, { useState, useEffect } from "react"
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from 'spotify-web-api-node'
import Header from "../components/Header";
import Category from "../components/Track/Category";
import TrackSearchResult from "../components/Track/TrackSearchResult";

const categoryList = [
    {
        title: 'Podcasts',
        backgroundColor: '#27856a',
        url: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'
    },
    {
        title: 'Made for you',
        backgroundColor: '#1e3264',
        url: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe'
    },
    {
        title: 'Charts',
        backgroundColor: '#8d67ab',
        url: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg'
    },
    {
        title: 'New Releases',
        backgroundColor: '#e8115b',
        url: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112'
    },
    {
        title: 'V-Pop',
        backgroundColor: '#ffc864',
        url: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg'
    },
    {
        title: 'K-Pop',
        backgroundColor: '#148a08',
        url: 'https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e'
    },
    {
        title: 'Romance',
        backgroundColor: '#8c1932',
        url: 'https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38'
    },
    {
        title: 'Hip-hop',
        backgroundColor: '#ba5d07',
        url: 'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c'
    },
    {
        title: 'In the car',
        backgroundColor: '#477d95',
        url: 'https://i.scdn.co/image/ab67706f00000002ffa215be1a4c64e3cbf59d1e'
    },
    {
        title: 'Kids',
        backgroundColor: '#8d67ab',
        url: 'https://t.scdn.co/images/15a38c44c4484cc3a078aaab5bd4e828'
    },
    {
        title: 'Dance/Electronic',
        backgroundColor: '#dc148c',
        url: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff'
    },
    {
        title: 'Trending',
        backgroundColor: '#d7f27d',
        url: 'https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg'
    },
]

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
        <Container className="d-flex flex-column py-2 px-4 col searchContainer" style={{height: '100vh', color: '#fff'}}>

            <Header/>
            <Form.Control 
            type="search"
            placeholder="Search Songs/ artists"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="searchBar"/>
                <div className="flex-grow-1 mt-2" style={{overflowY: 'auto'}}>
                    {searchResults.map(track => (
                        <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                    ))}
                    <div>
                        {searchResults.length === 0 && (
                            // <div className="text-center rounded" style={{whiteSpace: "pre", color: '#fff', fontSize: '20px', fontWeight: '600'}}>
                            //     {lyrics}
                            // </div>
                            <div>
                                <h2 className='mb-4'>Search</h2>
                                <div className='row mb-2'>
                                    {categoryList.map(category => (
                                        <div className='col-2'><Category category={category}/></div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </Container>
    )
}