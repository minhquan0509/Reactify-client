import React from "react"
import { reducerCases } from "../../utils/constants";
import { useStateProvider } from "../../utils/StateProvider"
export default function TrackTag({track}){
    const [{currentPlaying}, dispatch] = useStateProvider();
    function handlePlay(){
        dispatch({type: reducerCases.SET_PLAYING, currentPlaying: track})
    }
    return (
        <div className="d-flex align-items-center rounded mb-2" style={{cursor: "pointer", backgroundColor: '#2a2e2b'}} onClick={handlePlay}>
            <img src={track.albumUrl} style={{height: '80px', maxWidth: '80px', marginRight: '16px', flexGrow: '1'}}/>
            <div style={{marginRight: '10px', maxWidth: 'calc(100% - 120px)'}}>{track.title}</div>
        </div>
    )
}