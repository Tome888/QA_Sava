import { Link } from "react-router-dom";

export function RegSignIn(){
    return(
        <div>
            <p className="headingSlogan">Сигурност со <span className="spanH1">клик!</span></p>
            <div className="wrapperBtns">
                <Link to={'/signIn'}>
                <div className="landingPageBtn">
                Најави се
                </div>
                </Link>
                <Link to={'/register'}>
                <div className="landingPageBtn">
                Регистрирај се
                </div></Link>
            </div>
        </div>
    )
}