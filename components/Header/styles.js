import styled from 'styled-components';

export const StyledHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    background-color:transparent;

    position:fixed;
    top:0;

    z-index:2;

    width:100%;
    min-height:72px;
    height:fit-content;

    padding:0 20px 20px;

    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;

    will-change:background-color;
    transition:.5s;

    &:after{
        content:"";
        background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 15%, rgba(0, 0, 0, 0.125) 30%, rgba(0, 0, 0, 0.25) 46%, rgba(0, 0, 0, 0.4) 61%, rgba(0, 0, 0, 0.553) 75%, rgba(0, 0, 0, 0.694) 88%, rgba(0, 0, 0, 0.8));

        position:absolute;
        top:0;
        left:0;

        width:100%;
        height:72px;

        pointer-events:none;
        z-index:-1;
    }

    @media(max-width:480px){
        flex-direction:column;

        .right{
            width:100% !important;
        }
    }

    .left{
        display:flex;
        flex-direction:row;
        align-items:center;
        
        gap:25px;

        height:50%;
        padding:8px;
        width:fit-content;

        .left__logo{
            background-image:url(https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg);
            background-position:center;
            background-repeat:no-repeat;

            width:96px;
            height:72px;
        }

        .desktop{
            display:none !important;

            @media(min-width:1024px){
                display:flex !important;
            }
        }

        .mobile{
            display:block !important;

            @media(min-width:1024px){
                display:none !important;
            }
        }

        a{
            text-decoration:none;
            color:inherit;

            &:visited{
                color:inherit;
            }
        }

        .left__container{
            height:fit-content;

            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            gap:4px;

            height:24px;

            span{
                height:100%;
                width:fit-content;

                display:flex;
                align-items:center;
                justify-content:center;
                
                color:#fff;
                font-size:4.75vw;
                font-weight:bold;

                @media(min-width:769px){
                    font-size:2em;
                }
            }

            .left__icon{
                width:100%;
                height:100%;

                display:flex;
                align-items:center;
                justify-content:center;
                
                path{
                    fill:#fff;
                    width:32px !important;
                    height:32px !important;
                }
            }

            p{
                height:90%;

                display:flex;
                justify-content:center;
                align-items:center;

                position:relative;

                font-family:'Nunito',sans-serif;
                font-weight:bold;

                text-transform:uppercase;

                @media(max-width:1024px){
                    display:none;
                }

                &:hover{
                    cursor:pointer;

                    &:after{
                        width:100%;
                    }
                }

                &:after{
                    content: "";
                    position: absolute; 

                    bottom: -4px;
                    left: 0;
                
                    display: block;
                    height: 2px;
                    width: 0;
                    
                    background: #fff;
                    transition: width 0.3s ease;
                }
            }
        }
    }

    .right a{
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:12px;

        padding: 0 12px;

        text-decoration:none;
        color:inherit;

        &:visited{
            color:inherit;
        }

        h2{
            font-family:'Nunito',sans-serif;
            font-weight:lighter;
            font-size:1em;
            min-width:100px;
            width:fit-content;
            position:relative;

            @media(max-width:480px){
                display:none;
            }

            &:hover{
                cursor:pointer;

                &:after{
                    width:100%;
                }
            }

            &:after{
                content: "";
                position: absolute; 

                bottom: -4px;
                left: 0;
            
                display: block;
                height: 2px;
                width: 0;
                
                background: #fff;
                transition: width 0.3s ease;
            }
        }

        .dropdown__avatar{
            background: url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA2F31B77164DD87A4CE9B9E3A056EB7DFB2C06D318C9B65B2E930F990EF4D94/scale?width=96&format=png) 0% 0% / contain no-repeat;
            border-radius:50%;

            width:48px;
            height:48px;
        }
    }
`;