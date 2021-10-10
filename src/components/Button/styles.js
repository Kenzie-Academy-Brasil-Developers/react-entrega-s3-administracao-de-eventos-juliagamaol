import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #21262B;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 13vh;
    z-index: 7;
    
`
export const Nav = styled.nav`
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    @media (max-width:417px){
        div{
            position: absolute;
            top: 0;
            left: 27%;
        }
    }
    @media (min-width:1024px){
       .btns{
            height: 9vh;
            display: flex;
       }
    }

    .btns{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    h2{
        color: #fff;
    }
    button{
        border: none;
        border-radius: 7px;
        background: none;
        padding: 6px;
        display: inline-block;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        color: #fff;
    }

    button:hover{
        background-color: #4CAF50;
    }
`

