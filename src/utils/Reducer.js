import {
    reducerCases
} from "./constants";

export const initialState = {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    topTracks: [],
    selectedPlaylist: null,
    selectedPlaylistId: null,
    spotifyApi: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        case reducerCases.SET_PLAYING:
            return {
                ...state,
                currentPlaying: action.currentPlaying,
            };
        case reducerCases.SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.playerState,
            };
        case reducerCases.SET_TOP_TRACKS:
            return {
                ...state,
                topTracks: action.topTracks,
            };
        case reducerCases.SET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        case reducerCases.SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };
        case reducerCases.SET_SPOTIFY_API:
            return {
                ...state,
                spotifyApi: action.spotifyApi,
            };
        default:
            return state;
    }
}

export default reducer;