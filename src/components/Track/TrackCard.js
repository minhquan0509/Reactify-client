import React from "react"
export default function TrackCard({track }){
    // function handlePlay(){
    //     chooseTrack(track)
    // }
    return (
        <div className="d-flex flex-column rounded mb-2 p-3 trackCard">
            <img className="rounded" src={track.albumUrl} style={{height: '100%', width: '100%', marginBottom: '8px'}}/>
            <div className="trackCard-title mb-2" style={{whiteSpace: 'nowrap'}}>{track.title}</div>
            <div style={{color: '#b3b3b3'}}>{track.artist}</div>
        </div>
    )
}