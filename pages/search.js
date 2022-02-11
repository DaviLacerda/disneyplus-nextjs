import Header from "../components/Header/Header";
import { SearchContainer } from "../styles/search";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

import axios from "axios";
import { useState } from "react";

function Search() {
    var timeout = null;
    var isReady = true;
    var link = undefined;

    const [display, setDisplay] = useState(undefined);

    const searchApi = async (input) => {
        clearInterval(timeout);

        if (input !== "") {
            clearInterval(timeout);

            timeout = setInterval(async function () {
                if (isReady == true) {
                    getArrayWithResult(input);
                    isReady = false;
                }
            }, 1000);
        } else {
            document.getElementsByClassName('content__display')[0].style.display = 'none';
        }
    };

    const getArrayWithResult = async (input) => {
        let response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${input}`
        );

        response.data.results !== [] && setDisplay(response.data.results);

        setTimeout(() => {
            document.getElementsByClassName('content__display')[0].style.display = 'flex'
        }, 5000)
    };

    return (
        <>
            <Header></Header>
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Search by title"
                    onInput={(e) => searchApi(e.target.value)}
                ></input>
                <div className="content__display">
                    {display !== undefined &&
                        display.map((index, keyValue) => {
                            {
                                index.title &&
                                    (link = index.title
                                        .toLowerCase()
                                        .replace(/([ :])/g, "-"));
                                index.name &&
                                    (link = index.name
                                        .toLowerCase()
                                        .replace(/([ :])/g, "-"));
                            }
                            if (index.poster_path) {
                                return (
                                    <Link href={`/content?name=${link}`} passHref key={keyValue}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${index.poster_path}`}
                                        ></img>
                                    </Link>
                                );
                            }
                        })}
                </div>
            </SearchContainer>
            <Footer></Footer>
        </>
    );
}

export default Search;
