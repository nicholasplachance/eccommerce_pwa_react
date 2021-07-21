import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    padding: 20px 45px;

    @media screen and ( max-width: 800px ) {
        padding: 10px;
    }
}

a {
    text-decoration: none;
    color: #111;
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyle;
