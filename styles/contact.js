import styled from 'styled-components';

export const ContactContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    gap:10%;

    width:100%;
    height:100vh;

    padding:16px;

    @media(max-width:600px){
        flex-direction:column;
    }

    h1,h2,h3{
        font-family:'Nunito', sans-serif;
        font-weight:bold;
        color:#f0f0f0;
    }

    .contact__social{
        display:flex;
        align-items:center;
        flex-direction:row;
        flex-wrap:wrap;
        gap:8px;    
    
        img{
            filter:brightness(0.9);
            transition: filter .3s;

            &:hover{
                filter:brightness(1);
            }
        }
    }
`;