import Header from "../components/Header";
import videoSrc from '../media/video/video-ccxp-HOME.mp4'; 
import Footer from "../components/Footer";
import SectionRight from "../components/SectionRight";
import SectionLeft from "../components/SectionLeft";
import CarrosselCcxp from "../components/CarrosselCcxp";


function Home() {
  return (
    <div >
      <div className="content">
      <Header />
      <h1 className="frase-principal">
        Tenha a melhor e mais completa experiência na <span className="efeito">CCXP 2024!</span>
      </h1>
      <div className="video-container">
        <video className="video-border" controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <SectionRight/>
      <CarrosselCcxp/>
      <SectionLeft/>
      <Footer />
    </div>
    </div>
  );
}

export default Home;