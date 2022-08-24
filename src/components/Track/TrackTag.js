import React from "react"
export default function TrackTag({track }){
    // function handlePlay(){
    //     chooseTrack(track)
    // }
    return (
        <div className="d-flex align-items-center rounded mb-2" style={{cursor: "pointer", backgroundColor: '#2a2e2b'}}>
            <img src={track.albumUrl} style={{height: '80px', width: '80px', marginRight: '16px'}}/>
            <div>{track.title}</div>
        </div>
    )
}