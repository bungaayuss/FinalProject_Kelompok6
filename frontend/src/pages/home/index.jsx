import Footer from "../../components/user/footer";
import Header from "../../components/user/header";
import Hero from "../../components/user/hero";
import Highlight from "../../components/share/highlight";
import Testimony from "../../components/share/testimony";
import Deals  from "../../components/share/deals";
import Fact from "../../components/share/fact";

export default function Home (){
    return (
        <>
            <Header />
            <Hero />
            <Highlight />
            <Deals/>
            <Fact/>
            <Testimony />
            <Footer />
        </>
    )
}