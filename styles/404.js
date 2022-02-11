import styled from 'styled-components';

export const Container404 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;
    height:100%;
    min-height:100vh;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:40px;

    font-family:'Nunito', sans-serif;

    .errorShow{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:8px;

        @media(min-width:900px){
            flex-direction:row;
        }

        .border{
            content:' ';
            height:4px;
            width:100%;
            background-color:#f0f0f0;

            @media(min-width:900px){
                height:40px;
                width:4px;
            }
        }
    }

    .homeRedirect{
        a{
            color:inherit;
            text-decoration:none;
        }

        button{
            position:relative;
            width:108px;
            height:48px;

            padding:16px;
            border:none;
            
            background-color:#fff;
            font-weight:bold;
            font-size:1.2em;

            transition:all .5s;
            will-change:background-color;
            z-index:2;

            &:hover{
                cursor:pointer;
                background-color:#fffa;

                &:before{
                    top:-12px;
                    right:-12px;
                }
            }

            &:active, &:focus{
                transform:scale(0.95);
            }

            &:before{
                position:absolute;
                top:-8px;
                right:-8px;
                content:'';
                width:108px;
                height:48px;
                border:1px solid #fff;
                z-index:-2;
                transition:all .5s;
            }
        }
    }
`