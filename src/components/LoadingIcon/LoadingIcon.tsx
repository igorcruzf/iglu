import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import {Container, LoadingName} from "./styled";

interface LoadingProps {
    colors?: string[];
}

const LoadingIcon: React.FC<LoadingProps> = ({ colors = ['#62DEFA', '#F8BFCA', '#41FFA5', '#BC94D2', '#414141'] }) => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex(currentColorIndex => (currentColorIndex + 1) % colors.length);
        }, 900);
        return () => clearInterval(interval);
    }, [colors.length]);

    return (
        <Container>
            <FontAwesomeIcon icon={faIgloo} color={colors[currentColorIndex]} size={"5x"} bounce />
            <LoadingName style={{ color: colors[currentColorIndex] }}>IGLU</LoadingName>
        </Container>
    );
};

export default LoadingIcon;