import './Header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return <div id={"header"}>
        <FontAwesomeIcon icon={faIgloo} id={"iglooIcon"}/>
        <div id={"title"}>
            IGLU
        </div>
    </div>
}