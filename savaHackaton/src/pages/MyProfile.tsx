import { CalendarDiv } from "../components/CalendarRight";
import { ChartComponent } from "../components/ChartComponent";

export function MyProfile(){
    return(
        <div className="myProfileMainDiv">
            <ChartComponent/>
            <CalendarDiv/>
        </div>
        
    )
}