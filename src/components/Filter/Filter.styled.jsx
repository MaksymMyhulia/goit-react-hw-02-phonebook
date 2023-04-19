import styled from "@emotion/styled";
 export const LabelDescription = styled.label`
 display: flex;
 flex-direction: column;
 gap: ${({theme}) => theme.space[3]}px;
 
 `;

 export const Input = styled.input`
 padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;
 
 width: 300px;
 max-width: 100%;
 border-radius: ${({theme}) => theme.space[3]}px;
 border: none;
 box-shadow: ${({theme}) => theme.shadows.normal};
 color: ${({theme}) => theme.colors.text};
 background-color: ${({theme}) => theme.colors.backgroundColor};

 font-size: ${({theme}) => theme.fontSizes.m};

 `;
 
 export const LabelWrapper = styled.div`
 gisplay; flex;
 gap: ${({theme}) => theme.space[3]}px;
 margin-left: ${({theme}) => theme.space[3]}px;
 `;

