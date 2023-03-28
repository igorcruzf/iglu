import React from 'react';
import './LanguageButton.css'
interface ButtonProps {
    onClick: () => void;
    text: string;
    flagUrl: string;
    disable?: boolean;
}

const LanguageButton: React.FC<ButtonProps> = ({ onClick, text , flagUrl, disable = false}) => {
    return (
        <button className={"language-button"} onClick={onClick} disabled={disable}>
            <div className={"language-text"}>
                <img className={"flag-icon"} src={`${process.env.PUBLIC_URL}/${flagUrl}`} alt=""/>
                {text}
            </div>
        </button>
    );
};

export default LanguageButton;
