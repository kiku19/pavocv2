import { mainContainer, img, h1, p } from "../css/ObjectsCss.js";
import { userThemeContext } from "../App";

import { useContext } from "react";
import useSize from "../hooks/useSize.js";

import image from "../images/Section3ImageGroup.png";
import LightButton from "./LightButton.js";

function Section3() {
  const theme = useContext(userThemeContext);
  const bg = {
    background: theme.primaryDark,
    width: "100%",
    marginBlockStart: "clamp(20px,9.25vw,220px)",
  };

  const match = useSize("(max-width:800px)");
  // console.log(match);
  return (
    <>
      <div style={bg}>
        <div
          style={match?{
            ...mainContainer,
            marginBlockStart: "0",
            paddingBlock: "clamp(60px,4vw,100px)",
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
          }:{
            ...mainContainer,
            marginBlockStart: "0",
            paddingBlock: "clamp(60px,4vw,100px)",
          }}
        >
          {match ? (
            //mobile view
            <>
              <LightButton
                styles={{ background: "white", color: theme.primaryDark,marginBlockEnd: "min(38px,7vw)" }}
              >
                Lorem ipsum
              </LightButton>
              <h1 style={{ ...h1, ...head,marginBlockEnd: "min(38px,7vw)", }}>
                We got your Future covered from A-Z
              </h1>
              <div style={{ ...left,marginBlockEnd: "min(38px,7vw)" }}>
                <img style={{ ...img }} src={image} alt="Section3"></img>
              </div>
              <p style={{ ...p, ...para, }}>
                Lörem ipsum häktig assade. Rödgrönrosa nådat. Tånogon utsmarta.
                Du kan vara drabbad. Diktig preskap om penisam. Decise afav
                plara. Tens fysortad i nyst makroling i bebel. Devirys lirat
                prere. Fyr sortad när is. Polykyll tåpp det parafas.
              </p>
            </>
          ) : (
            //desktop view
            <>
              <div style={{ ...left }}>
                <img style={{ ...img }} src={image} alt="Section3"></img>
              </div>

              <div style={right}>
                <LightButton
                  styles={{ background: "white", color: theme.primaryDark }}
                >
                  Lorem ipsum
                </LightButton>

                <h1 style={{ ...h1, ...head }}>
                  We got your Future covered from A-Z
                </h1>

                <p style={{ ...p, ...para }}>
                  Lörem ipsum häktig assade. Rödgrönrosa nådat. Tånogon
                  utsmarta. Du kan vara drabbad. Diktig preskap om penisam.
                  Decise afav plara. Tens fysortad i nyst makroling i bebel.
                  Devirys lirat prere. Fyr sortad när is. Polykyll tåpp det
                  parafas.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
const left = {
  flexShrink: "0",
  display: "flex",
  alignItems: "center",
};
const right = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginInlineStart: "min(10vw,245px)",
};
const head = {
  color: "white",
  maxWidth: "580px",
  fontSize: "clamp(2.813rem,4vw,4.25rem)",
  marginBlockEnd: "min(32px,1.5vw)",
};

const para = {
  maxWidth: "460px",
  color: "white",
  marginBlockEnd: "min(32px,1.5vw)",
};
export default Section3;
