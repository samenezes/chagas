import styled from "styled-components";

const StyleAddTemperatura = {
    ConteudoPrincipal : styled.div `
        width: 100%;
        height: 12vh;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding: 0px 10px 0px 10px;
        margin-left: 20px;
    `,

    InputCriarTemperatura : styled.input `
        font-family: Poppins, 'sans-serif';
        font-size: 14px;
        border-radius: 5px;
        border: solid 1px #B4B4B4;
        width: 25%;
        padding: 5px 10px;
        &:focus {
            outline: none;
        }
    `,

    BtnCriarTemperatura : styled.button `
        border: none;
        border-radius: 5px;
        width: 10%;
        padding: 5px 10px;
        font-family: Poppins, 'sans-serif';
        background-color: #4DA768;
        color: #FFF;
        font-weight: 500;
        transition: all 0.5s;
        &:hover {
            cursor: pointer;
            transition: all 0.5s;
            background-color: #4da76867;
            color: #1b2029
        }
    `
}

export default StyleAddTemperatura