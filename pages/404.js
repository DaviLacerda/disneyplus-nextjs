import { Container404 } from "../styles/404";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

function Page404(){
    return (
        <>
            <Header />
            <Container404>
                <div className="errorShow">
                    <h1>Error 404</h1>
                    <div className="border"></div>
                    <h2>Not Found</h2>
                </div>
                <div className="homeRedirect">
                    <Link href="/" passHref>
                        <button>Home</button>
                    </Link>
                </div>
            </Container404>
            <Footer />
        </>
    )
}

export default Page404;