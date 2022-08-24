
export default function Player({accessToken, id}){
    if (!accessToken || !id) return null
    const srcLink = `https://open.spotify.com/embed/track/${id}?utm_source=generator`

    // useEffect(() => 
    //     setPlay(true)
    // , [id])

    return <iframe title={id} className='fixed-bottom mx-auto' style={{borderRadius:'12px'}} src={srcLink} width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
}