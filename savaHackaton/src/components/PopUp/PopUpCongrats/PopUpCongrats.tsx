import { format } from 'date-fns';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popupcongrats.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PopUpCongrats = () => {
  const todayDate = format(new Date(), 'dd.MM.yyyy');
  return (
    <div className="popupcongrats">
      <div className="content">
        <img className="greenArrow" src="/images/GreenArrow.png" alt="GreenArrow" />
        <h4>Честитки!</h4>
        <p>
          <FontAwesomeIcon className="iconCheck" icon={faCircleCheck} />
          Верифицирани на {todayDate}
        </p>
      </div>
    </div>
  );
}

export default PopUpCongrats;
