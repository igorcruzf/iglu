import React from 'react';
import { Button, LanguageText, FlagIcon } from './styled';

interface ButtonProps {
    onClick?: () => void;
    text: string;
    flagUrl: string;
    disable?: boolean;
}

const LanguageButton: React.FC<ButtonProps> = ({ onClick = () => null, text, flagUrl, disable = false }) => {
    return (
        <Button disabled={disable} onClick={onClick}>
            <LanguageText>
                <FlagIcon src={`${process.env.PUBLIC_URL}/${flagUrl}`} alt="Flag icon" />
                {text}
            </LanguageText>
        </Button>
    );
};

export default LanguageButton;