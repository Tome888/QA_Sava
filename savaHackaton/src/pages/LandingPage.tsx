import { PhoneImg } from "../components/PhoneImg";
import { RegSignIn } from "../components/RegSignIn";

export function LandingPage(){
return(
    <section className="landingPage">
        <RegSignIn/>
        <PhoneImg/>
    </section>
)
}