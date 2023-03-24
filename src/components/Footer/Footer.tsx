import './Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
    return <div id={"footer"}>
        <div id={"center"}>
            <FontAwesomeIcon icon={faIgloo} id={"iglooIconFooter"}/>
            <div id={"footerTitle"}>
                © Todos os direitos reservados.
            </div>
        </div>
    </div>
}