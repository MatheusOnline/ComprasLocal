import styled from "styled-components";

export const ContainerSearch = styled.div`
    display: flex;
    border: 2px solid var(--neutro_color_200);
    border-radius: 8px;
    height: 40px;
    width: 350px;
    overflow: hidden;
    &:focus-within{
        border-color: var(--brand_color_300);
    }
`


export const InputSearch = styled.input`
    border: none;
    width: 100%;
    padding: 0 10px;
    &:focus{
        outline: none;
    }
`
