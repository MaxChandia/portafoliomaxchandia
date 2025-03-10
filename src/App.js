import { useState } from 'react';
import './portfolio.css';

function App() {
  const [slide, setSlide] = useState(0);


  const handleSlidePrev = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleSlideNext = () => {
    setSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };


  
  const slides =[{
    id: "1",
    src: "./images/maestranzaeyh.png",
    url: "https://eyhmaestranza.cl/",
    alt:"eyh"
},
{
    id: "2",
    src: "./images/parroquiatransfi.png",
    url: "https://www.parroquiatransfiguracion.cl/",
    alt:"parroquiatransfiguración"
},
{
  id: "3",
  src: "./images/aldhu.png",
  url: "https://www.figma.com/proto/kl8puB1aCscPuCetHPNCbF/ALDHU-ver-Escritorio?node-id=1-3&t=3LWgW4zZKHdi6xFu-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  alt:"aldhu"
}] 

  return (
    <div className="App">
      <section className='sectionDetails'>
        <div >
          <div className='sectionText'>
            <h2><b>Hola, mi nombre es</b></h2>
            <h1>Maximiliano Chandía Flores</h1>
            <p>Soy desarrollador de aplicaciones web con
            experiencia en front-end y back-end. Busco satisfacer los requerimientos de cada cliente según sus necesidades, aportando soluciones creativas a cada necesidad.
            </p>
          </div>
          <div className='sectionDetailsImage'>
            <a href='./CVMaximilianoChandíaFlores.pdf' download>
              <img src='./images/CV.png' alt='CVLogo'/>
            </a>
            <img src='./images/linkedin.webp' onClick={() => window.open('https://www.linkedin.com/in/maxchandiaf/', '_blank')} alt='linkedinlogo'></img>
            <img src='./images/github.png' onClick={() => window.open('https://github.com/MaxChandia', '_blank')}  alt='githubLogo'></img>
          </div>
        </div>
        <div className='pageSlides'>
          <button onClick={handleSlidePrev}>&lt;</button>
            <a href={slides[slide].url} target="_blank" rel="noopener noreferrer">
              <img src={slides[slide].src} alt={slides[slide].alt} />
            </a>
          <button onClick={handleSlideNext}>&gt;</button>
        </div>
      </section>
      <section className='sectionTec'>
        <h2>Tecnologías utilizadas</h2>
        <div className='sectionTecImage'>
          <img src='./images/HTML.png' alt='htmlLogo'></img>
          <img src='./images/CSS.png' alt='cssLogo'></img>
          <img src='./images/JS.png' alt='JSLogo'></img>
          <img src='./images/React.png' alt='reactLogo'></img>
          <img src='./images/nextjs.png' alt='nextLogo'></img>    
        </div>
      </section>
      <section className='sectionContact'>
        <p>Escríbeme a</p>
        <p>maximiliano.chandiaf@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
