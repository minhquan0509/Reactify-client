import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCaretDown} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return (
        <div className="d-flex justify-content-between position-sticky top-0 py-2 visible">
            <div>
                <button className='rounded-circle' style={{width: '40px', height: '40px', backgroundColor: '#0a0f0c', marginRight: '8px'}}><FontAwesomeIcon style={{color: '#a0a3a1'}} icon={faAngleLeft} /> </button>
                <button className='rounded-circle' style={{width: '40px', height: '40px', backgroundColor: '#0a0f0c'}}><FontAwesomeIcon style={{color: '#a0a3a1'}} icon={faAngleRight} /> </button>
            </div>
            <div className='d-flex justify-content-between align-items-center p-1' style={{cursor: 'pointer',backgroundColor: '#050806', borderRadius: '21px'}}>
                <img className='rounded-circle' src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=816953538488898&height=300&width=300&ext=1663941552&hash=AeQFqa8ZLAOx31xQRc4' style={{width: '30px', height: '30px'}}/>
                <div className='mx-2'>Do Minh Quan</div>
                <FontAwesomeIcon className='px-1' icon={faCaretDown} />
            </div>
        </div>
    )
}