import React from "react";
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import {FooterContainer, FooterTitle, IglooIcon} from "./styled";

export default function Footer() {
    return (
        <FooterContainer>
            <IglooIcon icon={faIgloo} />
            <FooterTitle>
                © Todos os direitos reservados.
            </FooterTitle>
        </FooterContainer>
    );
}