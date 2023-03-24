import React from 'react';
import './LanguageButton.css'
interface ButtonProps {
    onClick: () => void;
    text: string;
    flagUrl: string;
}

const LanguageButton: React.FC<ButtonProps> = ({ onClick, text , flagUrl}) => {
    return (
        <button className={"language-button"} onClick={onClick}>
            <div className={"language-text"}>
                <img className={"flag-icon"} src={`${process.env.PUBLIC_URL}/${flagUrl}`} alt=""/>
                {text}
            </div>
        </button>
    );
};

export default LanguageButton;
