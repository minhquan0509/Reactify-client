import React from "react"
export default function Category({category}){
    // function handlePlay(){
    //     chooseTrack(track)
    // }
    const bgColor = category.backgroundColor
    return (
        <div className="d-flex flex-column rounded mb-4 p-3" style={{backgroundColor: bgColor, cursor: 'pointer'}}>
            <div style={{whiteSpace: 'nowrap', fontWeight: '600', fontSize: '20px'}}>{category.title}</div>
            <img className="rounded" src={category.url} style={{height: '100%', width: '100%'}}/>
        </div>
    )
}