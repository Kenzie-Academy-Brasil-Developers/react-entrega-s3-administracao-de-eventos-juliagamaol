import styled from "styled-components";

export const Card = styled.div`    
    @media (min-width:769px){
        padding: 15px;
        height: 80vh;
        width: 25%;
        
        .btns{
            width: 10vw;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    margin-top: 20px;

    :hover{
        box-shadow: 8px 8px 16px 0 rgba(0,0,0,0.2);
    }

    img{
        border-radius: 5px 5px 0 0;
    }
    
`
export const Container = styled.div`
     @media(min-width:769px){
        box-sizing: border-box;
    }
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    figure{
       width: 100%;
       height: 25%;
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 10px;
       padding: 10px;
    }

    img{
        width: 15%;
        height: 100%;
    }

    .info{
        height: 30vh;
        text-align: left;
        font-size: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }

    
`