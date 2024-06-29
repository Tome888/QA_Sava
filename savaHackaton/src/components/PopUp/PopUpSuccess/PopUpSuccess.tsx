import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./popupsuccess.css"

const PopUpSuccess = () => {
  return (
    <div className="popupsuccess">
      <FontAwesomeIcon className="circleCheck" icon={faCircleCheck} />
      <h4>Успешно пријавување!</h4>
      <p>Успешно се најавивте на Sava. <br /> Сега можете да управувате со вашите полиси, да поднесувате побарувања и да истражувате нови планови за осигурување.</p>
    </div>
  )
}

export default PopUpSuccess
