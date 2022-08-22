import { useEffect, useState } from 'react'
export default function Player({accessToken, id}){
    const [play, setPlay] = useState(false)
    if (!accessToken || !id) return null
    const srcLink = `https://open.spotify.com/embed/track/${id}?utm_source=generator`

    // useEffect(() => 
    //     setPlay(true)
    // , [id])

    return <iframe style={{borderRadius:'12px'}} src={srcLink} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
}