import { useContext, useRef, useEffect } from "react";

import FeedbackCarousel from "./FeedbackCarousel.js";

import { mainContainer, h1, h3, Flex, A_Center } from "../css/ObjectsCss";
import { userThemeContext } from "../App";

import leftArrow from "../images/Arrow 3.png";
import rightArrow from "../images/Arrow 4.png";

const Section4 = () => {
  const theme = useContext(userThemeContext);
  const sliderRef = useRef();
  const containerRef = useRef();

  let interval = useRef(0);
  const head = {
    maxWidth: "965px",
    fontSize: "clamp(2.813rem,4vw,4.25rem)",
    color: theme.primaryDark,
    marginBlockEnd: "min(2vw,24.5px)",
    marginInlineEnd:"min(2.5vw,2rem)"
  };
  const head3 = {
    fontWeight: "400",
    fontSize: "clamp(1.2rem,1.2vw,1.75rem)",
  };
  const button = {
    position: "relative",
    padding: "0",
    borderRadius: "50%",
    width: "clamp(60px,2vw,86px)",
    height: "clamp(60px,2vw,86px)",
    border: "none",
    background: "none",
    boxShadow: "0px 0.822707px 19.745px rgba(0, 0, 0, 0.08)",
    flexShrink: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };
  const arrowImg = {
    width: "25px",
    height: "auto",
    cursor: "pointer",
  };

  const onClickLeft = () => {
    // console.log(interval,sliderRef.current.getBoundingClientRect().width -
    // containerRef.current.getBoundingClientRect().width)
    if (
      Math.abs(interval.current) <
      sliderRef.current.getBoundingClientRect().width -
        containerRef.current.getBoundingClientRect().width
    ) {
      interval.current -= 500;
    //   console.log("translateX(" + interval.current + "px)");
    //   console.log(sliderRef.current.getBoundingClientRect());
    //   console.log(containerRef.current.getBoundingClientRect());
      sliderRef.current.style.transform =
        "translateX(" + interval.current + "px)";
    }
  };
  const onClickRight = () => {
    if (interval.current > 0 || interval.current < 0) {
      interval.current += 500;
    //   console.log("translateX(" + interval.current + "px)");
    //   console.log(sliderRef.current.getBoundingClientRect());
    //   console.log(containerRef.current.getBoundingClientRect());
      sliderRef.current.style.transform =
        "translateX(" + interval.current + "px)";
    }
  };
  return (
    <>
      <div style={{ ...mainContainer, ...Flex, ...A_Center }}>
        <div style={{ ...Flex, flexDirection: "column" }}>
          <h1 style={{ ...h1, ...head }}>What a job holder says about us</h1>
          <h3 style={{ ...h3, ...head3 }}>What a job holder says about us</h3>
        </div>
        <button
          style={{
            ...button,
            marginInlineEnd: "min(2vw,24px)",
            marginInlineStart: "auto",
          }}
          onClick={onClickLeft}
        >
          <img style={arrowImg} src={leftArrow} alt="left"></img>
        </button>
        <button style={button} onClick={onClickRight}>
          <img style={arrowImg} src={rightArrow} alt="right"></img>
        </button>
      </div>
      <FeedbackCarousel
        forwardRef={{ sliderRef, containerRef }}
      ></FeedbackCarousel>
    </>
  );
};

export default Section4;
