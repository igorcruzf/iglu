import './Header.css'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default function Header() {
    return <Link to="/iglu" style={{textDecoration: 'none'}}>
        <div id={"header"}>
            <FontAwesomeIcon icon={faIgloo} id={"igloo-icon"}/>
            <div id={"title"}>
                IGLU
            </div>
        </div>
    </Link>
}