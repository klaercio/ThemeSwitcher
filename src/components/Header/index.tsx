import React, { useContext } from 'react';
import {Container } from './styles';
import Swtich from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';


interface HeaderProps {
    toggleTheme : () => void;
}

export default function Header({toggleTheme} : HeaderProps) {

    const {colors, title} = useContext(ThemeContext); 

    return (
        <Container>
            Hello World!!

            <Swtich
                onChange={toggleTheme}
                checked={title ==='dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    )
}