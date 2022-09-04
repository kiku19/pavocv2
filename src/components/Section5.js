import { useContext } from "react";
import { userThemeContext } from "../App";
import useSize from "../hooks/useSize";
import { mainContainer, img, h1, A_Center,mainContainerMobile } from "../css/ObjectsCss";
import LightButton from "./LightButton";
import QuestionAnswer from "./QuestionAnswer";

const Section5 = () => {
  const theme = useContext(userThemeContext);
  const match = useSize("(max-width:800px)");

  const greenBg = {
    background: theme.primaryDark,
    width: "100%",
    maxWidth: "1920px",
    marginInline: "auto",
    marginBlockStart: "clamp(20px,9.25vw,100px)",
  };
  const left = {
    display: "flex",
    ...A_Center,
    marginBlock: "clamp(70px,4vw,150px)",
    flexShrink: "0",
  };
  const right = {
    width: "100%",
    marginBlockStart: "clamp(70px,8vw,120px)",
    marginInlineStart: "clamp(55px,6vw,110px)",
    // maxHeight: "788px",
    overflow: "hidden",
  };
  return (
    <>
      <div style={greenBg}>
        <div style={match?{...mainContainer,...mainContainerMobile,...A_Center,paddingBlock:"75px",flexDirection:"column"}:{...mainContainer}}>
          {match ? (
            <>
              {" "}
              <LightButton
                styles={{
                  background: "white",
                  color: theme.primaryDark,
                  width: "clamp(190px,3vw,216px)",
                  fontWeight: "700",
                }}
              >
                KNOW YOUR ANSWERS
              </LightButton>
              <h1 style={{ ...h1, color: "white" }}>FAQ</h1>
              <div style={left}>
                <img
                  style={img}
                  src="/images/Section5ImageGroup.png"
                  alt="Section5"
                ></img>
              </div>
              <QuestionAnswer></QuestionAnswer>
            </>
          ) : (
            <>
              {" "}
              <div style={left}>
                <img
                  style={img}
                  src="/images/Section5ImageGroup.png"
                  alt="Section5"
                ></img>
              </div>
              <div style={right}>
                <LightButton
                  styles={{
                    background: "white",
                    color: theme.primaryDark,
                    width: "clamp(190px,3vw,216px)",
                    fontWeight: "700",
                  }}
                >
                  KNOW YOUR ANSWERS
                </LightButton>
                <h1 style={{ ...h1, color: "white" }}>FAQ</h1>
                <QuestionAnswer></QuestionAnswer>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Section5;
