import styled from 'styled-components'


export const Events = styled.div`
    padding: 15px;
    height: 100%;
    width: 100%;
    color: white;
    background: black;
    opacity: 0.5;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 7;
`

export const ContentEvent = styled.div`
    box-sizing: border-box;
    padding: 16px;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;

    .events{
        height: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
`
