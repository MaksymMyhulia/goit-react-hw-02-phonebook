import React from "react";
import { ContainerStyled, MainStyled } from "./Container.styled";

export const Container = ({ children }) => {
    return (
        <ContainerStyled>
            <MainStyled> {children} </MainStyled>
        </ContainerStyled>
    )
}