import { useStateProvider } from "../utils/StateProvider";
import { useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

export default function Player({accessToken}){
    const [{ token, currentPlaying, spotifyApi }, dispatch] = useStateProvider();
    if(!accessToken || !currentPlaying) return null
    console.log(currentPlaying.id);
    const srcLink = `https://open.spotify.com/embed/track/${currentPlaying.id}?utm_source=generator`

    // useEffect(() => 
    //     setPlay(true)
    // , [id])

    return accessToken && <iframe title={currentPlaying.id} className='fixed-bottom mx-auto' style={{borderRadius:'12px'}} src={srcLink} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
}