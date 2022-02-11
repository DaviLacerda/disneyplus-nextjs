// import components
import Header from "../components/Header/Header";
import MainSlider from "../components/MainSlider/MainSlider";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import CardSection from "../components/CardSection/CardSection";
import Footer from '../components/Footer/Footer'

function Home() {
    return(
        <>
            <Header></Header>
            <MainSlider></MainSlider>
            <CompanyCard></CompanyCard>
            <CardSection></CardSection>
            <Footer></Footer>
        </>
    )
}

export default Home;