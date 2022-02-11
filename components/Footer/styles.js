import styled from 'styled-components';

export const FooterContainer = styled.footer`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:8px;

    width:100%;
    padding:16px;
    
    position:relative;
    bottom:0;

    background-color:#000;

    font-family:'Nunito',sans-serif;
    font-size:.8em;

    .footer__logo{
        background-image:url(https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg);
        background-position:center;
        background-repeat:no-repeat;

        width:96px;
        height:72px;
    }

    .footer__content{
        width:40%;
        word-wrap:break-word;
        text-align:center;
    }
`;