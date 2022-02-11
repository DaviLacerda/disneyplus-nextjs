import styled, {keyframes} from 'styled-components';

const fadeRightToLeft = keyframes`
    0%{ 
        transform: translateX(50px);
        opacity:0;
    }
    100%{ 
        transform: translateX(0px);
        opacity:1;
    }
`;

export const SliderContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;

    margin-top:15vh;

    @media(min-width:900px){
        margin-top:7.5vh;
    }

    .swiper-slide-active{
        .content{
            img:last-child{
                animation: ${fadeRightToLeft} 1s;
            }
        }
    }

    .swiper-button-next:hover::after, .swiper-button-prev:hover::after{
        color:#f0f0f0;
    }

    .swiper-button-next:after, .swiper-button-prev:after{
        color:#f0f0f000;
        font-size:3em;
        transition:color .3s;
    }

    .swiper{
        width:100%;
        padding:16px;
    }

    .swiper-slide{
        display:flex;
        align-items:center;
        justify-content:center;

        width:100%;
        max-height:500px;

        .content{
            display:flex;
            align-items:center;
            justify-content:center;

            width:100%;
            height:100%;

            padding:16px 32px;

            @media(max-width:600px){
                height:350px;
            }

            a{
                position:relative;
                height:100%;
            }

            .overlay{
                position:absolute !important;
                top:6vh !important;
                left:10vw !important;

                width:32.5% !important;
                height:fit-content !important;
            }

            img:not(:last-child){
                max-height:500px;

                box-shadow: 0px 7px 17px -1px #000000;

                filter:brightness(0.75);
                border:3px solid #fff0;
                transition:filter .5s, border .5s;
                will-change:filter border;
                
                object-fit:cover;

                border-radius:8px;

                @media(max-width:300px){
                    object-position:69.5%;
                }

                @media(min-width:300px){
                    object-position:76.5%;
                }

                &:hover{
                    cursor:pointer;
                    filter:brightness(0.9);
                    border:3px solid #f0f0f0;
                }
            }

            img:last-child{
                position: absolute;
                top: 0;
                left:0;

                width:100%;
                height:100%;

                pointer-events:none;

                @media(max-width:600px){
                    width:100%;
                    height:auto;

                    top:3vh;
                    left:5vw;
                }
            }
        }
    }
`;