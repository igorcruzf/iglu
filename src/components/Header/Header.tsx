import React from "react";
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import {HeaderContainer, HeaderLink, IglooIcon, Title} from "./styled";

export default function Header() {
    return (
        <HeaderLink to="/iglu">
            <HeaderContainer>
                <IglooIcon icon={faIgloo}/>
                <Title>IGLU</Title>
            </HeaderContainer>
        </HeaderLink>
    );
}