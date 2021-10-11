import styled from 'styled-components'


export const Events = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    color: #fff;

   
`

export const ContentEvent = styled.div`
    max-width: 80%;
    height: 50vh;
    border: 2px solid #fff;
    background: black;
    opacity: 0.9;
    border-radius: 13px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: fixed;
    z-index: 10;

    @media (max-width:768px){
        .events{
            display: flex;
            flex-direction: column;
        }

    }
    .events{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10.5%;
        max-width: 520px;
        gap: 10px;
        padding: 10px;
    }

    
    
`
