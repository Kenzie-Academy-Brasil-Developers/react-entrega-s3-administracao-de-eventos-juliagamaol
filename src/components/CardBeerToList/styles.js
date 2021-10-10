import styled from "styled-components";

export const Card = styled.div`    
    @media (min-width:769px){
        
        height: 50vh;
        width: 15%;
    }
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    height: 50vh;
    width: 50%;
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
    justify-content: center;
    align-items: center;
    
    figure{
       width: 100%;
       height: 50%;
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 10px;
       padding: 10px;
    }

    img{
        width: 20%;
        height: 100%;
    }

    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    button {
        
    }
  
`