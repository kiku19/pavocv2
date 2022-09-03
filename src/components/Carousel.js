import "../css/Carousel.css";
import { Container } from "../css/ObjectsCss";

const Carousel = ({ slides }) => {
  return (
    <>
      <div className="mainContainer" style={{...Container}}>
        <div className="container">
          <div className="innerContainer">
            {slides.map((e, i) => {
              return <img src={e.content()} alt={e.title} key={i}></img>;
            })}
          </div>
          <div className="innerContainer">
            {slides.map((e, i) => {
              return <img src={e.content()} alt={e.title} key={i}></img>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
