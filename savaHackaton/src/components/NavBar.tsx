import { Link } from 'react-router-dom'
import backIcon from '../assets/icons/image.png'

export function NavBar(){
    return(
        <nav>
            <Link to={'/'}>
            <img src={backIcon} alt="" />
            </Link>
        </nav>
    )
}