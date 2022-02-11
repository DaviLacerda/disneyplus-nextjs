import { StyledHeader } from "./styles";
import { useEffect } from "react";
import Link from "next/link";

function Header() {
    function openOtherOptions() {
        for(let i = 0; document.getElementsByClassName('desktop')[i] !== undefined; i++){
            const options = document.getElementsByClassName('desktop')[i]

            options.style = 'display: flex !important';
        }
    }

    //header background scroll effect
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY !== 0){
                const header = document.querySelector('header');
                header.style.backgroundColor = 'rgb(9, 11, 19)'
            }
            else{
                const header = document.querySelector('header');
                header.style.backgroundColor = 'transparent'
            }
        })
    }, [])

    return (
        <StyledHeader>
            <div className="left">
                <div className="left__logo"></div>

                <a href="/">
                    <div className="left__container">
                        <svg className="left__icon" viewBox="0 0 36 36"> 
                            <path d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z"></path>
                        </svg>
                        <p>Home</p>
                    </div>
                </a>
                
                <a href="/search">
                    <div className="left__container">
                        <svg className="left__icon" viewBox="0 0 36 36">
                            <path d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z"></path>
                        </svg>
                        <p>Search</p>
                    </div>
                </a>

                <a href="/watchlist">
                    <div className="left__container">
                        <span>+</span>
                        <p>Watchlist</p>
                    </div>
                </a>

                <div className="left__container desktop">
                    <svg className="left__icon" viewBox="0 0 36 36">
                        <path d="M17.625 26.028L10.44 30l1.373-8.412L6 15.631l8.033-1.228 3.592-7.653 3.592 7.653 8.033 1.228-5.813 5.957L24.81 30z"></path>
                    </svg>
                    <p>Originals</p>
                </div>

                <div className="left__container desktop">
                    <svg className="left__icon" viewBox="0 0 36 36">
                        <path d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838"></path>
                    </svg>
                    <p>Movies</p>
                </div>

                <div className="left__container desktop">
                    <svg className="left__icon" viewBox="0 0 36 36">
                        <path d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z"></path>
                    </svg>
                    <p>Series</p>
                </div>

                <div className="left__container mobile" onClickCapture={openOtherOptions}>
                    <svg className="left__icon" viewBox="0 0 36 36">
                        <path d="M19.53 28.827h-2.933a1.048 1.048 0 0 1-1.048-1.047v-2.933c0-.579.47-1.048 1.048-1.048h2.933c.578 0 1.047.47 1.047 1.048v2.933c0 .578-.469 1.047-1.047 1.047zm0-8.799h-2.933a1.048 1.048 0 0 1-1.048-1.047v-2.933c0-.579.47-1.048 1.048-1.048h2.933c.578 0 1.047.469 1.047 1.048v2.933c0 .578-.469 1.047-1.047 1.047zm0-8.8h-2.933a1.048 1.048 0 0 1-1.048-1.047V7.248c0-.578.47-1.047 1.048-1.047h2.933c.578 0 1.047.469 1.047 1.047v2.933c0 .579-.469 1.048-1.047 1.048z"></path>
                    </svg>
                </div>
            </div>

            <div className="right">
                <a href="/contact">
                    <h2>Davi Lacerda</h2>
                    <div className="dropdown__avatar"></div>
                </a>
            </div>
        </StyledHeader>
    )
}

export default Header;