import styled from 'styled-components'

export const Details = styled.div`
    background: #000;
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
    height: 50vh;
    width: 20vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: fixed;
    z-index: 10;

    button {
        width: 10%;
        padding: 5px;
        margin-left: 85%;
        margin-top: 5px;
    }
    p{
        text-align: left;
    }
    
`