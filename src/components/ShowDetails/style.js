import styled from 'styled-components'

export const Details = styled.div`
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    position: fixed;
    color: #fff;
    
`
export const Content = styled.div`
    border: 2px solid #fff;
    background: black;
    border-radius: 13px;
    word-wrap: break-word;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: fixed;
    z-index: 10;
    padding: 10px;

    button {
        border: 1px solid red;
        border-radius: 5px;
        width: 30px;
        padding: 5px;
        margin-left: 85%;
        margin-top: 5px;
    }
    p{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`