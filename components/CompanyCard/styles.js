import styled from 'styled-components';

export const CompanyContainer = styled.div`
    display:flex;
    flex-direction:row;
    place-content:center space-evenly;  
    flex-wrap:wrap;

    margin-top:2.5vh;

    padding:16px;

    width:100%;
    height:calc(20% - 20px);

    @media(max-width:600px){
        gap:10px;
    }

    .card{
        display:flex;
        align-items:center;
        justify-content:center;

        position:relative;

        width: calc(18.5% - 20px);
        height:100%;
        box-shadow: 0px 7px 14px 0px #000000;

        border:3px solid #D5D9E140;
        border-radius:12px;
        transition: all .5s;

        &:hover{
            cursor:pointer;
            border:3px solid #f0f0f0;
            transform:scale(1.05);
            box-shadow: 0px 14px 14px 0px #000000;

            video{
                opacity:1;
            }
        }

        @media(max-width:600px){
            width:30%;
        }

        img{
            display: block;
            height: 100%;
            width: 100%;
            z-index:1;
            
            object-fit: cover;
            pointer-events:none;
        }

        video{
            position:absolute;
            top:0;

            opacity:0;
            transition:opacity .5s;

            height:100%;
            width:100%;

            object-fit:cover;
            border-radius:8px;
        }
    }
`;