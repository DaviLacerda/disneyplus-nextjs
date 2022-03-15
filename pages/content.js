import axios from "axios";
import { useEffect } from "react";

import { ContentContainer } from "../styles/content";
import Footer from "../components/Footer/Footer";

// import components
import Header from "../components/Header/Header";

const api_key = process.env.NEXT_PUBLIC_API_KEY;

export async function getServerSideProps({ query }) {
    let name = query.name.toLowerCase().replace(/([-])/g, " ");

    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${name}`
        );
    
        let data = response.data.results[0];
    
        let id = data.id;
        let type = data.media_type;
    
        switch (type) {
            case "movie":
                let movie = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
                );
                return {
                    props: {
                        data: { ...movie.data, type },
                        trailer: `https://youtube.com/results?search_query=${movie.data.title}+trailer`,
                    },
                };
    
            case "tv":
                let tv = await axios.get(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`
                );
                return {
                    props: {
                        data: { ...tv.data, type },
                        trailer: `https://youtube.com/results?search_query=${tv.data.name}+trailer`,
                    },
                };
    
            default:
                break;
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}

function Content({ data, trailer }) {
    const addWatchList = (span) => {
        span.classList.toggle("added");
        span.textContent === "+"
            ? (span.textContent = "✓")
            : (span.textContent = "+");
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY !== 0) {
                if (document.getElementsByClassName("content__bg")[0]) {
                    const bg =
                        document.getElementsByClassName("content__bg")[0];
                    bg.style.opacity = "0.6";
                    bg.style.filter = "brightness(0.4)";
                }
            } else {
                if (document.getElementsByClassName("content__bg")[0]) {
                    const bg =
                        document.getElementsByClassName("content__bg")[0];
                    bg.style.opacity = "0.8";
                    bg.style.filter = "brightness(0.525)";
                }
            }
        });
    }, []);

    return (
        <>
            <Header></Header>
            <ContentContainer>
                {
                    <>
                        <div
                            className="content__bg"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                            }}
                        ></div>
                        <div className="content__header">
                            <h1>{data.name || data.title}</h1>
                            <span>
                                {data.type}
                                {data.runtime && ` • ${data.runtime} minutes`}
                                {data.number_of_seasons &&
                                    ` • ${
                                        data.number_of_seasons == 1
                                            ? `${data.number_of_episodes} Episodes`
                                            : `${data.number_of_seasons} Seasons`
                                    }`}
                                {data.first_air_date &&
                                    ` • ${data.first_air_date.split("-")[0]}`}
                                {data.release_date &&
                                    ` • ${data.release_date.split("-")[0]}`}
                            </span>
                            <p>{data.overview}</p>

                            <div className="btn__container">
                                <a
                                    href={trailer}
                                    className="trailer"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="open">
                                        <svg className="open__icon">
                                            <path d="M27.147 20.421L11.27 29.274A2.2 2.2 0 0 1 8 27.353V9.647a2.2 2.2 0 0 1 3.271-1.921l15.876 8.852a2.2 2.2 0 0 1 0 3.843z"></path>
                                        </svg>
                                        <span className="open__text">Play</span>
                                    </button>
                                </a>

                                <button
                                    className="watchlist_add"
                                    onClick={(e) =>
                                        addWatchList(e.target.firstChild)
                                    }
                                >
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                    </>
                }
            </ContentContainer>
            <Footer />
        </>
    );
}

export default Content;
