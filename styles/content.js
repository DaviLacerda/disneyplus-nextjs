import styled from "styled-components";

export const ContentContainer = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap");

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    position: relative;

    @media (max-width: 1200px) {
        justify-content: center;
    }

    width: 100%;
    height: 100vh;

    color: #fff;
    font-family: "Nunito", sans-serif;
    font-size: 0.875em;

    a {
        width: 10%;
    }

    span {
        text-transform: uppercase;
        font-size: 0.675em;
    }

    @media (min-width: 600px) {
        font-size: 1em;
        span {
            font-size: 0.7em;
        }
    }

    @media (min-width: 1200px) {
        font-size: 1.125em;
        span {
            font-size: 0.825em;
        }
    }

    .btn__error404 {
        width: 100%;
        height: 100%;

        padding: 12px;
        background-color: #f0f0f0;

        border: none;
        border-radius: 20px;

        transition: background-color 0.5s, width 0.3s;

        &:hover {
            cursor: pointer;
            background-color: #f0f0f085;
        }
    }

    .content__bg {
        width: 100%;
        height: 100%;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        opacity: 0.8;
        filter: brightness(0.525);

        transition: all 0.3s;
        will-change: opacity, brightness;

        z-index: -3;
    }

    .content__header {
        position: absolute;
        padding: 16px;

        @media (min-width: 1081px) {
            top: 20%;
            left: 5%;
        }
    }

    .btn__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;

        margin-top: 10px;

        .added {
            transform: rotate(-330deg);
            transition: transform 0.5s;
        }

        .watchlist_add {
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: rgba(0, 0, 0, 0.6);
            border: 2px solid #fff;

            width: 48px;
            height: 48px;

            border-radius: 50%;
            transition: background-color 0.5s, color 0.4s;

            color: #fff;

            span {
                display: flex;
                align-items: center;
                justify-content: center;

                pointer-events: none;
                width: 100%;
                height: 100%;

                font-size: 2em;
                font-weight: lighter;
            }

            &:hover {
                cursor: pointer;
                background-color: #fff;
                color: #000;
            }
        }

        .trailer {
            display: block;
            width: fit-content;
            height: fit-content;

            color: inherit;
            text-decoration: none;

            &:visited {
                color: inherit;
            }

            .open {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;

                width: fit-content;

                padding: 0 24px;

                border: none;
                border-radius: 4px;

                background-color: #fff;
                transition: filter 0.3s;

                &:hover {
                    cursor: pointer;
                    filter: brightness(0.8);
                }

                .open__text {
                    display: flex;
                    align-items: center;

                    font-family: "Nunito", sans-serif;
                    font-size: 1.4em;

                    color: #000;
                    height: 3em;
                }

                .open__icon {
                    width: 32px;
                    height: 3em;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    path {
                        fill: #000;
                        width: 32px;
                        height: 32px;
                    }
                }
            }
        }
    }

    p {
        width: 100%;

        @media (min-width: 1200px) {
            max-width: 50vw;
        }

        word-wrap: break-word;
    }
`;
