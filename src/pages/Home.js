import { Container } from 'react-bootstrap'
import TrackTag from '../TrackTag';
import TrackCard from '../TrackCard';
const trackList = [
    {
        albumUrl: "https://i.scdn.co/image/ab67616d0000b27329f906fe7a60df7777b02ee1",
        artist: "Sơn Tùng M-TP",
        id: "5fFLotKS1286huYIMQHqz7",
        title: "Muộn rồi mà sao còn"
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d0000b273647e50ec7319c38e2b7a661e",
        artist: "BLACKPINK",
        id: "7EyhPjrJzjx0fk2i7vUJCS",
        title: "Pink Venom"
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d0000b273bd14e958d6f3eabbcad5476b",
        artist: "Phuc Du",
        id: "3CqtQwaoQTdgDWLHyv7Twr",
        title: "đứa nào làm em buồn?"
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d0000b273a400211178f6d590d875f2da",
        artist: "Emcee L (Da LAB)",
        id: "4CUvVaAYuXtvYURLFz7EIL",
        title: "Chuyện Đôi Ta (feat. Muộii)"
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d0000b2731895052324f123becdd0d53d",
        artist: "BLACKPINK",
        id: "6bvZRLLkBKkmgpBJTTj3QK",
        title: "How You Like That"
    },
    {
        albumUrl: "https://i.scdn.co/image/ab67616d0000b273bf7d3058bc206639f626da8b",
        artist: "Ha Anh Tuan",
        id: "0mjxilRyCxDiSRbnzYFydr",
        title: "Chuyện Của Mùa Đông"
    }
];

export default function Home(){
    return (
        <Container className="d-flex flex-column py-2 px-4 col" style={{height: '100vh', color: '#fff', marginTop: '80px'}}>
            <h2 className='mb-4'>Hôm nay nghe gì</h2>
            <div className='row mb-2'>
                {trackList.map(track => (
                    <div className='col-4'><TrackTag track={track}/></div>
                ))}
            </div>
            <h2 className='mb-4'>Top mixes</h2>
            <div className='row mb-2'>
                {trackList.map(track => (
                    <div className='col-2 track-wrapper'><TrackCard track={track}/></div>
                ))}
            </div>

        </Container>
    )
}