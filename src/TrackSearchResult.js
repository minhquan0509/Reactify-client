import React from "react"
export default function TrackSearchResult({track, chooseTrack}){
    function handlePlay(){
        chooseTrack(track)
    }
    return (
        <div className="d-flex m-2 align-items-center rounded p-1" style={{cursor: "pointer", backgroundColor: '#2a2e2b', color: '#fff'}}
            onClick={handlePlay}
        >
            <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
            <div style={{marginLeft: '20px'}}>
                <div>{track.title}</div>
                <div style={{color: '#b3b3b3'}}>{track.artist}</div>
            </div>
        </div>
    )
}