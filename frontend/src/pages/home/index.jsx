import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import Hero from "../../components/user/hero";
import Highlight from "../../components/share/highlight";
import Testimony from "../../components/share/testimony";

export default function Home (){
    return (
        <>
            <Header />
            <Hero />
            <Highlight />
            <Testimony />
            <Footer />
        </>
    )
}