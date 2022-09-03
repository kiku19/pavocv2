import LightButton from "../components/LightButton.js"
import useSize800 from "../hooks/useSize";

import { mainContainer, h1, p, h1Mobile, img } from "../css/ObjectsCss.js";

import p1 from "../images/products/1.png";
import p2 from "../images/products/2.png";
import p3 from "../images/products/3.png";
import p4 from "../images/products/4.png";

const Section2 = () => {
  const size = "(max-width:800px)";
  const match = useSize800(size);

  return (
    <>
      <div
        style={{
          ...mainContainer,
          flexDirection: "column",
          alignItems: "center",
          marginBlockStart: "clamp(70px,5vw,224px)",
        }}
      >
        <LightButton bg="rgba(0, 147, 98, 0.1)" color="#004B0C"></LightButton>
        <h1
          style={match ? { ...h1, ...h1Mobile, ...head } : { ...h1, ...head }}
        >
          Easy steps to get your dream job
        </h1>
        <p style={{ ...p, ...para }}>
          Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten
          och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt
          koldioxidsänka. Prenyktiga klimatflykting alolig påbeda es.
        </p>
        <div style={match?{...products,...productsMobile}:{...products}}>
          <div style={match?{...product,...productMobile}:{...product}}>
            <img style={{...img,height:"auto"}} src={p1} alt="p1"></img>
          </div>
          <div style={match?{...product,...productMobile}:{...product}}>
            <img style={{...img,height:"auto"}} src={p2} alt="p2"></img>
          </div>
          <div style={match?{...product,...productMobile}:{...product}}>
            <img style={{...img,height:"auto"}} src={p3} alt="p3"></img>
          </div>
          <div>
            <img style={{...img,height:"auto"}} src={p4} alt="p4"></img>
          </div>
        </div>
      </div>
    </>
  );
};

const head = {
  maxWidth: "1920px",
  fontSize: "clamp(2.813rem,4vw,4.25rem)",
};
const para = {
  maxWidth: "1920px",
  textAlign: "center",
  color: "black",
};

const products = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
const productsMobile = {
  flexDirection:"column",
  alignItems:"center"
}
const product = {
  marginInlineEnd: "clamp(50px,7vw,75px)",
};
const productMobile = {
  marginInlineEnd: "0px",
  marginBlockEnd:"64px"
}
export default Section2;
