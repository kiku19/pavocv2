import { useContext } from "react";
import { userThemeContext } from "../App";
import { J_Center, Flex, A_Center, Container } from "../css/ObjectsCss";
import "../index.css"

const FeedbackCarousel = ({forwardRef}) => {
    const theme = useContext(userThemeContext)
    

    const feedbackCarousel = {
        width: "100%",
        // background: "lightgreen",
        height: "300px",
        position: "relative",
        fontFamily:"swiss721_Light",
        overflow:"hidden", 
        marginBlockStart: "min(10vw,120px)",
        ...Container
    };
    const slider = {
        position: "absolute",
        ...Flex,
        ...A_Center,
        transition:"All 0.5s"
    };
    const para = {
        paddingInline:"1.5rem",
        fontSize:"0.875rem",
        textAlign:"justify",
    }
    const card = {
        minWidth:"450px",
        width:"min(15vw,540px)",
        background:theme.white,
        borderRadius:"5px",
        boxShadow: "0px 0.822707px 19.745px rgba(0, 0, 0, 0.08)",
        padding:"clamp(20px,1vw,28px)",
        marginInlineEnd:"clamp(60px,4vw,70px)"
    }
    const userInfo = {
        ...Flex,
    }
    const quotes = {
        fontSize:"clamp(60px,3vw,78px)",
        color:theme.primaryLight1Thirty,
        display:"block",
        height:"50px",
        // marginBlockEnd:"1rem",
    }
    const textInfo = {
        ...Flex,
        flexDirection:"column",
        ...J_Center,
        marginInlineStart:"clamp(15px,2vw,20px)"
    }
    const head = {
        color:theme.primaryLight1,
        fontSize:"clamp(1rem,2vw,1.125rem)",
    }
    return (
        <>
      <div style={feedbackCarousel} ref={forwardRef.containerRef}>
        <div style={slider} ref={forwardRef.sliderRef}>
            {feedbacks.map((value,index)=>{
                return(
                    <div style={card}>
                        <span style={quotes}>“</span><p style={para}>{value.para}</p><span style={{...quotes,transform:"rotate(-180deg)"}}>“</span>
                        <div style={userInfo}>
                            {value.icon}
                            <div style={textInfo}>
                            <h4 style={head}>{value.name}</h4>
                            <p>{value.university}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

const feedbacks = [
  {
    para: " Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt koldioxidsänka. ",
    icon: <img src="/images/feedbackProfilePic/1.png" alt="profilePicture"></img>,
    name: "Franseco",
    university: "Berkley University",
  },
  {
    para: " Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt koldioxidsänka. ",
    icon: <img src="/images/feedbackProfilePic/1.png" alt="profilePicture"></img>,
    name: "Franseco",
    university: "Berkley University",
  },
  {
    para: " Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt koldioxidsänka. ",
    icon: <img src="/images/feedbackProfilePic/1.png" alt="profilePicture"></img>,
    name: "Franseco",
    university: "Berkley University",
  },
  {
    para: " Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt koldioxidsänka. ",
    icon: <img src="/images/feedbackProfilePic/1.png" alt="profilePicture"></img>,
    name: "Franseco",
    university: "Berkley University",
  },
  {
    para: " Lörem ipsum reras kvasir. Georade derade bokstavsdrog. Dafir geoheten och pydat fapåssade. Du kan vara drabbad. Speråren katuråskapet samt koldioxidsänka. ",
    icon: <img src="/images/feedbackProfilePic/1.png" alt="profilePicture"></img>,
    name: "Franseco",
    university: "Berkley University",
  },
];

export default FeedbackCarousel;
