import Header from "../components/Header/Header"
import { WatchContainer } from "../styles/watchlist"
import Footer from '../components/Footer/Footer'

function Watchlist() {
    return (
        <>
            <Header></Header>
            <WatchContainer>
                <div className="watchlist__icon"></div>
                <h2>Your watchlist is empty</h2>
                <p>Content you add to your watchlist will appear here.</p>
                <p>{`I'll development this in future (i need to study more about hooks to make that :/)`}</p>
            </WatchContainer>
            <Footer></Footer>
        </>
    )
}

export default Watchlist