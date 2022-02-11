import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        user-select:none;
    }
    html{
                /* ===== Scrollbar CSS ===== */
        /* Firefox */
        * {
            scrollbar-width: auto;
            scrollbar-color: #fff0 #2a2f3f;
        }
        /* Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 5px;
        }
        *::-webkit-scrollbar-track {
            background: #2a2f3f;
        }
        *::-webkit-scrollbar-thumb {
            background-color: #969696;
            border-radius: 20px;
            border: 2px none #ffffff;
        }
    }
    body{
        background-color:#2A2F3F;
        min-height:100vh;
        width:100%;
        color:#f9f9f9;
    }
`;