import phoneImg from '../assets/photos/image.png'

export function PhoneImg(){
    return(
        <div className='phoneImgWrapper'>
            <img src={phoneImg} alt="" />
            <div className='shadow'></div>
        </div>
    )
}