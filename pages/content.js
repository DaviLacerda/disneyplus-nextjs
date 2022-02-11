import axios from "axios";
import { useEffect } from "react";

import { ContentContainer } from "../styles/content";
import Footer from "../components/Footer/Footer";

// import components
import Header from "../components/Header/Header";

export async function getServerSideProps({ query }) {
    let name = query.name.toLowerCase().replace(/([-])/g, " ");

    let responseData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${name}`
    );

    let data = undefined;
    if (responseData.data.results.length) {
        data = responseData.data.results[0];

        let responseDataType = undefined;

        if (data.media_type === "movie") {
            responseDataType = await axios.get(
                `https://api.themoviedb.org/3/movie/${data.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            );
        } else {
            responseDataType = await axios.get(
                `https://api.themoviedb.org/3/tv/${data.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            );
        }

        let dataType = responseDataType.data;
        let responseTrailer = undefined;

        if (data.media_type === "movie") {
            responseTrailer = await axios.get(
                `https://api.themoviedb.org/3/movie/${dataType.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            );
        } else {
            responseTrailer = await axios.get(
                `https://api.themoviedb.org/3/tv/${dataType.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            );
        }

        let trailer = undefined;

        for (let i = 0; i < responseTrailer.length; i++) {
            if (responseTrailer[i].name.toLowerCase().includes("trailer")) {
                trailer = `https://youtube.com/watch?v=${responseTrailer[i].key}`;
            }
        }

        if (trailer === undefined) {
            trailer = `https://youtube.com/results?search_query=${
                dataType.title || dataType.name
            }+trailer`;
        }

        return {
            props: {
                data,
                dataType,
                trailer,
            },
        };
        
    } else{
        return {
            notFound: true,
        }
    }
}

function Content({ data, dataType, trailer }) {
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
                            <h1>{data.title || data.name}</h1>
                            <span>
                                {data.media_type}
                                {dataType.runtime &&
                                    ` • ${dataType.runtime} minutes`}
                                {dataType.number_of_seasons &&
                                    ` • ${
                                        dataType.number_of_seasons == 1
                                            ? `${dataType.number_of_episodes} Episodes`
                                            : `${dataType.number_of_seasons} Seasons`
                                    }`}
                                {dataType.first_air_date &&
                                    ` • ${
                                        dataType.first_air_date.split("-")[0]
                                    }`}
                                {dataType.release_date &&
                                    ` • ${dataType.release_date.split("-")[0]}`}
                            </span>
                            <p>{data.overview}</p>

                            <div className="btn__container">
                                <a
                                    href={trailer}
                                    className="trailer"
                                    target='_blank'
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
