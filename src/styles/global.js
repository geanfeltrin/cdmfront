import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0
}
html,body, #root{
    height:100%;
}

body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F3F5F6 !important;
    font-family: "Lato" !important, sans-serif;
}
small{
    text-decoration: none !important;
}
`;
export default GlobalStyle;
