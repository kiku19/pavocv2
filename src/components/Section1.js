//Components
import GreenButton from "./GreenButton";
//hooks
import useSize from "../hooks/useSize";
//image
import MaskedGroup from "../images/Section1MaskedGroup.png";
//css
import { mainContainer,mainContainerMobile, Flex, A_Center,h1,p,h1Mobile,img,h3 } from "../css/ObjectsCss.js";

function Section1() {

  

  const pMobile ={
    textAlign:"center"
  }

  const title = {
    ...Flex,
    ...A_Center,
    marginBlockStart: "min(45px,2vw)",
    marginBlockEnd: "min(45px,2vw)",
  };
  const right = {
    marginInlineStart: "auto",
  };
  const left = {
    width: "50%",
  };
  const top ={
    ...Flex,
    width:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }





  const imgMobile = {
    width:"min(80%,550px)",
  }
  const bottom = {
    display:"flex",
    justifyContent:"center"
  }

  const size = "(max-width:800px)"
  const match = useSize(size);
  // console.log(match)
  return (
    <div style={match?mainContainerMobile:mainContainer}>
      <div style={match?top:left}>

       {match?<></>: <div style={title}>
          <h2
            style={{ fontFamily: "swiss721_Italic", marginInlineEnd: "1rem" }}
          >
            PAVOC
          </h2>
          <h3 style={h3}>in quest of finding the unknown piece</h3>
        </div>}

        <h1 style={match?{...h1,...h1Mobile}:h1}>Find and train for your Dream job in one place</h1>
        <p style={match?{...p,...pMobile}:p}>
          Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten
          och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt
          koldioxidsänka.
        </p>
        <GreenButton>Explore Us</GreenButton>
      </div>
      <div style={match?bottom:{ ...Flex, ...right, ...A_Center }}>
        <img
          style={match?imgMobile:img}
          src={MaskedGroup}
          alt="MaskedGroup"
        ></img>
      </div>
    </div>
  );
}

export default Section1;
