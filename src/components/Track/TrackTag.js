import React from "react"
export default function TrackTag({track, setPlayingTrack}){
    function handlePlay(){
        setPlayingTrack(track)
    }
    return (
        <div className="d-flex align-items-center rounded mb-2" style={{cursor: "pointer", backgroundColor: '#2a2e2b'}} onClick={handlePlay}>
            <img src={track.albumUrl} style={{height: '80px', maxWidth: '80px', marginRight: '16px', flexGrow: '1'}}/>
            <div style={{marginRight: '10px', maxWidth: 'calc(100% - 120px)'}}>{track.title}</div>
        </div>
    )
}