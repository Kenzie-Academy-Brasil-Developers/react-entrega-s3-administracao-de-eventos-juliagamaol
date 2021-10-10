import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    font-family: 'Roboto Mono', monospace;
}

button{
   cursor:pointer;
}
a {
   text-decoration: none;
}
`