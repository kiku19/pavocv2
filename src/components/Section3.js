import { mainContainer,img } from "../css/ObjectsCss.js";
import { userThemeContext } from "../App";

import { useContext } from "react";

import image from "../images/Section3ImageGroup.png"

function Section3() {
  const theme = useContext(userThemeContext);
  const bg = {
    background: theme.primaryDark,
    width: "100%",
    marginBlockStart: "clamp(20px,9.25vw,220px)",
  };
  const right = {
    
  }
  return (
    <>
      <div style={bg}>
        <div style={{...mainContainer,marginBlockStart:"0"}}>
            <div>
                <img style={{...img}} src ={image} alt="Section3"></img>
            </div>
            <div style={right}>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
