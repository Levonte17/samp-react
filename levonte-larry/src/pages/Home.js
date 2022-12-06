import Contact from "../components/Contact";
import Header from "../components/Header";
import Website from "../components/Website";
import About from "../components/About";


function Home(props) {
    return(
        <div className="home">
            <Header />
            <About />
            <Website />
            <Contact />
        </div>
    )
};

export default Home;