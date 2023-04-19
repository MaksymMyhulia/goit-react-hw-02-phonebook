import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: ${({theme}) => theme.space[4]}px;
padding: ${({theme}) => theme.space[3]}px ${({theme}) => theme.space[4]}px;

width: 300px;
max-width: 100%;
`; 

export const Item = styled.li`
display: flex;

`;

export const DeleteBtn = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
gap: ${({theme}) => theme.space[4]}px;
`;