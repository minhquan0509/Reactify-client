import React from "react"
export default function TrackSearchResult({track, chooseTrack}){
    function handlePlay(){
        chooseTrack(track)
    }
    return (
        <div className="d-flex m-2 align-items-center rounded p-1" style={{cursor: "pointer", backgroundColor: '#ccc'}}
            onClick={handlePlay}
        >
            <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
            <div style={{marginLeft: '20px'}}>
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}