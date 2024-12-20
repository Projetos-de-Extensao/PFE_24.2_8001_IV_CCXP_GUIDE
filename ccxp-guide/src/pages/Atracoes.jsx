import Header from "../components/Header";
import Footer from "../components/Footer";
import CarrosselAtracoes from "../components/CarrosselAtracoes";
import CarouselPalcos from "../components/CarouselPalcos";
import AtracoesBloco from "../components/AtracoesBloco";
import CosplayMaster from "../components/CosplayMaster";
import ArtistsValley from '../components/ArtistsValley';

function Atracoes() {
    return(
       <div>
          <Header/>
          <h1 className="frase-principal">Convidados internacionais, competições de cosplay e <span className="efeito"> muito mais! </span></h1>
          <CarrosselAtracoes/>
          <AtracoesBloco/>
          <CosplayMaster/>
          <ArtistsValley/>
          <CarouselPalcos/>
          <Footer />
      </div>
  )}
  
  
  export default Atracoes;