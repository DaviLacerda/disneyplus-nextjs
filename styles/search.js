import styled from 'styled-components';

export const SearchContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;
    min-height:100vh;
    
    input{
        width:100%;
        height:10vh;

        border:none;

        font-family:'Nunito', sans-serif;
        font-size:3em;
        
        padding:16px 16px 16px 7.5vw;

        background-color:#4b4e5a;
        color:#f0f0f0;

        margin-top:20vh;

        @media(min-width:900px){
            margin-top:15vh;
        }

        &:focus{
            outline:none;
        }
    }

    .content__display{
        display:flex;
        flex-direction:row;
        justify-content:center;
        flex-wrap:wrap;
        gap:12px;

        width:100%;
        height:fit-content;

        padding:16px;

        img{
            width:100%;
            max-width:270px;
            height:400px;
            object-fit:cover;

            border:3px solid #D5D9E140;
            transition:all .3s;

            &:hover{
                cursor:pointer;
                border:3px solid #f0f0f0;
                transform:scale(1.05);
            }
        }
    }
`;