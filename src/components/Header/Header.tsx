import './Header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return <div id={"header"}>
        <FontAwesomeIcon icon={faIgloo} id={"igloo-icon"}/>
        <div id={"title"}>
            IGLU
        </div>
    </div>
}